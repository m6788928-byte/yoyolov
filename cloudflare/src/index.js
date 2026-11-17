const encoder = new TextEncoder();

async function matchesSecret(input, expected) {
  if (typeof input !== "string" || typeof expected !== "string" || !expected) return false;
  const [a, b] = await Promise.all([
    crypto.subtle.digest("SHA-256", encoder.encode(input)),
    crypto.subtle.digest("SHA-256", encoder.encode(expected))
  ]);
  const x = new Uint8Array(a), y = new Uint8Array(b);
  let diff = 0;
  for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
  return diff === 0;
}

function response(body, status, origin) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json; charset=utf-8",
      "cache-control": "no-store",
      "access-control-allow-origin": origin,
      "access-control-allow-methods": "POST, OPTIONS",
      "access-control-allow-headers": "content-type",
      "vary": "Origin"
    }
  });
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
        "access-control-allow-headers": "content-type",
        "access-control-max-age": "86400",
        "vary": "Origin"
      }
    });
    if (request.method !== "POST" || new URL(request.url).pathname !== "/verify")
      return response({ ok: false, error: "Not found" }, 404, origin);

    let body;
    try { body = await request.json(); } catch {
      return response({ ok: false, error: "Invalid request" }, 400, origin);
    }

    let ok = false;
    switch (body?.type) {
      case "main":
        ok = await matchesSecret(body.password, env.MAIN_PASSWORD);
        break;
      case "messages":
        ok = await matchesSecret(body.password, env.MESSAGES_PASSWORD);
        break;
      case "screen":
        ok = await matchesSecret(body.password, env.SCREEN_SHARE_PASSWORD);
        break;
      case "admin":
        ok = await matchesSecret(body.username, env.ADMIN_USERNAME) &&
             await matchesSecret(body.password, env.ADMIN_PASSWORD);
        break;
      default:
        return response({ ok: false, error: "Invalid request type" }, 400, origin);
    }
    return response({ ok }, ok ? 200 : 401, origin);
  }
};
