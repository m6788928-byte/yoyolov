const encoder = new TextEncoder();
const PBKDF2_ITERATIONS = 210000;
const SESSION_SECONDS = 12 * 60 * 60;
const REQUEST_TTL = 30 * 24 * 60 * 60;

function json(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "access-control-allow-origin": origin,
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "content-type, authorization",
      "vary": "Origin"
    }
  });
}

function bytesToBase64Url(bytes) {
  let binary = "";
  for (const byte of bytes) binary += String.fromCharCode(byte);
  return btoa(binary).replace(/=/g, "").replace(/\\+/g, "-").replace(/\\//g, "_");
}

function base64UrlToBytes(value) {
  const padded = value.replace(/-/g, "+").replace(/_/g, "/") + "===".slice((value.length + 3) % 4);
  const binary = atob(padded);
  return Uint8Array.from(binary, char => char.charCodeAt(0));
}

async function sha256(value) {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", encoder.encode(value)));
}

async function matchesSecret(input, expected) {
  if (typeof input !== "string" || typeof expected !== "string" || !expected) return false;
  const [a, b] = await Promise.all([sha256(input), sha256(expected)]);
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a[i] ^ b[i];
  return diff === 0;
}

async function hashPassword(password, salt) {
  const material = await crypto.subtle.importKey("raw", encoder.encode(password), "PBKDF2", false, ["deriveBits"]);
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", hash: "SHA-256", salt, iterations: PBKDF2_ITERATIONS },
    material,
    256
  );
  return new Uint8Array(bits);
}

async function passwordRecord(password) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  return {
    salt: bytesToBase64Url(salt),
    hash: bytesToBase64Url(await hashPassword(password, salt)),
    iterations: PBKDF2_ITERATIONS
  };
}

async function verifyPassword(password, record) {
  if (typeof password !== "string" || !record?.salt || !record?.hash) return false;
  const actual = await hashPassword(password, base64UrlToBytes(record.salt));
  const expected = base64UrlToBytes(record.hash);
  if (actual.length !== expected.length) return false;
  let diff = 0;
  for (let i = 0; i < actual.length; i++) diff |= actual[i] ^ expected[i];
  return diff === 0;
}

function sessionSecret(env) {
  return env.SESSION_SECRET || env.ADMIN_TABS_PASSWORD || env.ADMIN_PASSWORD || "";
}

async function signSession(env, claims) {
  const secret = sessionSecret(env);
  if (!secret) throw new Error("Owner session signing secret is not configured.");
  const payload = bytesToBase64Url(encoder.encode(JSON.stringify({
    ...claims,
    exp: Math.floor(Date.now() / 1000) + SESSION_SECONDS
  })));
  const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const signature = new Uint8Array(await crypto.subtle.sign("HMAC", key, encoder.encode(payload)));
  return payload + "." + bytesToBase64Url(signature);
}

async function readSession(env, request) {
  const match = /^Bearer\\s+(.+)$/i.exec(request.headers.get("Authorization") || "");
  if (!match) return null;
  const pieces = match[1].split(".");
  if (pieces.length !== 2) return null;
  const secret = sessionSecret(env);
  if (!secret) return null;
  try {
    const key = await crypto.subtle.importKey("raw", encoder.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["verify"]);
    const valid = await crypto.subtle.verify("HMAC", key, base64UrlToBytes(pieces[1]), encoder.encode(pieces[0]));
    if (!valid) return null;
    const claims = JSON.parse(new TextDecoder().decode(base64UrlToBytes(pieces[0])));
    if (!claims || claims.exp < Math.floor(Date.now() / 1000)) return null;
    return claims;
  } catch { return null; }
}

async function rateAllowed(env, request, route, limit, ttl) {
  if (!env.ACCESS) return false;
  const ip = request.headers.get("CF-Connecting-IP") || "unknown";
  const key = "rate:" + bytesToBase64Url(await sha256(route + ":" + ip));
  const current = Number(await env.ACCESS.get(key) || 0);
  if (current >= limit) return false;
  await env.ACCESS.put(key, String(current + 1), { expirationTtl: ttl });
  return true;
}

function text(value, max) {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function validEmail(value) {
  return value.length <= 254 && /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(value);
}

async function listPending(env) {
  const items = [];
  let cursor;
  do {
    const page = await env.ACCESS.list({ prefix: "request:", limit: 100, cursor });
    for (const key of page.keys || []) {
      const value = await env.ACCESS.get(key.name, "json");
      if (value?.status === "pending") items.push(value);
      if (items.length >= 500) return items;
    }
    cursor = page.list_complete ? undefined : page.cursor;
  } while (cursor);
  return items.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
}

async function handleAccess(request, env, origin, path) {
  if (!env.ACCESS) return json({ ok: false, error: "Access service is not configured." }, 503, origin);
  let body = {};
  try { body = await request.json(); }
  catch { return json({ ok: false, error: "Invalid request." }, 400, origin); }

  if (path === "/access/request") {
    if (!await rateAllowed(env, request, "request", 4, 3600))
      return json({ ok: false, error: "Too many requests. Try again later." }, 429, origin);
    const username = text(body.username, 20);
    const usernameKey = username.toLowerCase();
    const email = text(body.email, 254).toLowerCase();
    const password = typeof body.password === "string" ? body.password : "";
    const reason = text(body.reason, 300);
    if (!/^[A-Za-z0-9_]{3,20}$/.test(username))
      return json({ ok: false, error: "Choose a username with 3–20 letters, numbers, or underscores." }, 400, origin);
    if (!validEmail(email)) return json({ ok: false, error: "Enter a valid email address." }, 400, origin);
    if (password.length < 12 || password.length > 128)
      return json({ ok: false, error: "Use a password between 12 and 128 characters." }, 400, origin);

    const emailHash = bytesToBase64Url(await sha256(email));
    if (await env.ACCESS.get("user:" + usernameKey) || await env.ACCESS.get("email:" + emailHash))
      return json({ ok: false, error: "That username or email already has an account." }, 409, origin);
    const pendingByUser = await env.ACCESS.get("pending-user:" + usernameKey);
    const pendingByEmail = await env.ACCESS.get("pending-email:" + emailHash);
    if (pendingByUser || pendingByEmail)
      return json({ ok: false, error: "A request using that username or email is already waiting for review." }, 409, origin);

    const credentials = await passwordRecord(password);
    const id = crypto.randomUUID();
    const record = {
      id, username, usernameKey, email, emailHash, reason, createdAt: new Date().toISOString(),
      status: "pending", salt: credentials.salt, hash: credentials.hash, iterations: credentials.iterations
    };
    await env.ACCESS.put("request:" + id, JSON.stringify(record), { expirationTtl: REQUEST_TTL });
    await Promise.all([
      env.ACCESS.put("pending-user:" + usernameKey, id, { expirationTtl: REQUEST_TTL }),
      env.ACCESS.put("pending-email:" + emailHash, id, { expirationTtl: REQUEST_TTL })
    ]);
    return json({ ok: true, pending: true, message: "Your request was sent. You can sign in after the owner approves it." }, 201, origin);
  }

  if (path === "/access/login") {
    if (!await rateAllowed(env, request, "login", 8, 300))
      return json({ ok: false, error: "Too many sign-in attempts. Try again in a few minutes." }, 429, origin);
    const username = text(body.username, 20);
    const usernameKey = username.toLowerCase();
    const password = typeof body.password === "string" ? body.password : "";
    const account = await env.ACCESS.get("user:" + usernameKey, "json");
    if (!account) {
      if (await env.ACCESS.get("pending-user:" + usernameKey))
        return json({ ok: false, pending: true, error: "Your request is waiting for owner approval." }, 403, origin);
      return json({ ok: false, error: "Username or password is incorrect." }, 401, origin);
    }
    if (account.status !== "approved" || !await verifyPassword(password, account))
      return json({ ok: false, error: "Username or password is incorrect." }, 401, origin);
    const token = await signSession(env, { sub: usernameKey, role: "user" });
    return json({ ok: true, token, username: account.username }, 200, origin);
  }

  if (path === "/access/admin/login") {
    const expected = env.ADMIN_TABS_PASSWORD || env.ADMIN_PASSWORD;
    if (!await matchesSecret(body.password, expected))
      return json({ ok: false, error: "Owner password is incorrect." }, 401, origin);
    const token = await signSession(env, { sub: "owner", role: "owner" });
    return json({ ok: true, token }, 200, origin);
  }

  const claims = await readSession(env, request);
  if (path === "/access/session") {
    if (!claims || !["user", "owner"].includes(claims.role))
      return json({ ok: false, error: "Sign in again to continue." }, 401, origin);
    if (claims.role === "user") {
      const account = await env.ACCESS.get("user:" + claims.sub, "json");
      if (account?.status !== "approved") return json({ ok: false, error: "This account is not approved." }, 403, origin);
    }
    return json({ ok: true, role: claims.role, username: claims.sub }, 200, origin);
  }

  if (!claims || claims.role !== "owner")
    return json({ ok: false, error: "Owner sign-in required." }, 401, origin);

  if (path === "/access/admin/requests") {
    return json({ ok: true, requests: await listPending(env) }, 200, origin);
  }

  if (path === "/access/admin/decision") {
    const id = text(body.id, 64);
    const decision = body.decision;
    if (!/^[0-9a-f-]{36}$/i.test(id) || !["approve", "deny"].includes(decision))
      return json({ ok: false, error: "Invalid request." }, 400, origin);
    const key = "request:" + id;
    const record = await env.ACCESS.get(key, "json");
    if (!record || record.status !== "pending") return json({ ok: false, error: "This request is no longer pending." }, 404, origin);
    if (decision === "approve") {
      if (await env.ACCESS.get("user:" + record.usernameKey) || await env.ACCESS.get("email:" + record.emailHash))
        return json({ ok: false, error: "That username or email already has an account." }, 409, origin);
      const account = {
        username: record.username, email: record.email, emailHash: record.emailHash,
        status: "approved", salt: record.salt, hash: record.hash, iterations: record.iterations,
        createdAt: record.createdAt, approvedAt: new Date().toISOString()
      };
      await Promise.all([
        env.ACCESS.put("user:" + record.usernameKey, JSON.stringify(account)),
        env.ACCESS.put("email:" + record.emailHash, record.usernameKey),
        env.ACCESS.delete("pending-user:" + record.usernameKey),
        env.ACCESS.delete("pending-email:" + record.emailHash),
        env.ACCESS.put(key, JSON.stringify({ id, username: record.username, email: record.email, status: "approved", decidedAt: new Date().toISOString() }), { expirationTtl: REQUEST_TTL })
      ]);
    } else {
      await Promise.all([
        env.ACCESS.delete("pending-user:" + record.usernameKey),
        env.ACCESS.delete("pending-email:" + record.emailHash),
        env.ACCESS.put(key, JSON.stringify({ id, username: record.username, email: record.email, status: "denied", decidedAt: new Date().toISOString() }), { expirationTtl: REQUEST_TTL })
      ]);
    }
    return json({ ok: true, decision }, 200, origin);
  }

  return json({ ok: false, error: "Not found." }, 404, origin);
}

export default {
  async fetch(request, env) {
    const origin = request.headers.get("Origin") || "";
    const allowed = (env.ALLOWED_ORIGINS || "").split(",").map(x => x.trim()).filter(Boolean);
    if (!allowed.includes(origin)) return new Response("Forbidden origin", { status: 403 });
    if (request.method === "OPTIONS") return new Response(null, {
      status: 204,
      headers: {
        "access-control-allow-origin": origin,
        "access-control-allow-methods": "POST, OPTIONS",
        "access-control-allow-headers": "content-type, authorization",
        "access-control-max-age": "86400",
        "vary": "Origin"
      }
    });
    if (request.method !== "POST") return json({ ok: false, error: "Not found." }, 404, origin);
    const path = new URL(request.url).pathname;
    if (path.startsWith("/access/")) return handleAccess(request, env, origin, path);
    if (path !== "/verify") return json({ ok: false, error: "Not found." }, 404, origin);

    let body = {};
    try { body = await request.json(); }
    catch { return json({ ok: false, error: "Invalid request." }, 400, origin); }
    let ok = false;
    switch (body?.type) {
      case "main": ok = await matchesSecret(body.password, env.MAIN_PASSWORD); break;
      case "messages": ok = await matchesSecret(body.password, env.MESSAGES_PASSWORD); break;
      case "screen": ok = await matchesSecret(body.password, env.SCREEN_SHARE_PASSWORD); break;
      case "admin": ok = await matchesSecret(body.password, env.ADMIN_TABS_PASSWORD || env.ADMIN_PASSWORD); break;
      default: return json({ ok: false, error: "Invalid request type." }, 400, origin);
    }
    return json({ ok }, ok ? 200 : 401, origin);
  }
};
