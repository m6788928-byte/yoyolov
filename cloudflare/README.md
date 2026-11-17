# Yoyolov password service

This Worker verifies the site's access passwords without publishing them in GitHub source.

## Deploy in Cloudflare

1. Open **Workers & Pages** → **Create** → **Create Worker**.
2. Name it `yoyolov-auth`, deploy the starter Worker, then choose **Edit code**.
3. Replace the editor contents with `src/index.js` from this folder and deploy.
4. In the Worker **Settings → Variables and Secrets**, add these as **Secrets** (not plain-text vars):
   - `MAIN_PASSWORD`
   - `MESSAGES_PASSWORD`
   - `SCREEN_SHARE_PASSWORD`
   - `ADMIN_USERNAME`
   - `ADMIN_PASSWORD`
5. Add `ALLOWED_ORIGINS` as a plain-text variable. For the standard GitHub Pages origin use `https://m6788928-byte.github.io`. If Yoyolov is served from another domain, use that exact origin instead (multiple origins can be comma-separated).
6. Copy the Worker URL, normally `https://yoyolov-auth.<your-subdomain>.workers.dev`.

## Connect Yoyolov

Edit the value in the repository root `auth-config.js` to the Worker URL, without a trailing slash. Example:

```js
window.YOYO_AUTH_URL = "https://yoyolov-auth.example.workers.dev";
```

The endpoint is `POST /verify`. It accepts the gate type and submitted credential; it never returns the configured secret.

Use new, unique passwords of at least 16 characters. The old passwords were present in public source and should not be reused.

## CLI deployment alternative

From this directory:

```sh
npx wrangler deploy
npx wrangler secret put MAIN_PASSWORD
npx wrangler secret put MESSAGES_PASSWORD
npx wrangler secret put SCREEN_SHARE_PASSWORD
npx wrangler secret put ADMIN_USERNAME
npx wrangler secret put ADMIN_PASSWORD
``

Set `ALLOWED_ORIGINS` in `wrangler.toml` before deploying. The dashboard flow above is an alternative to the CLI.
