# Yoyolov access service

The Cloudflare Worker handles individual site access requests, owner approvals, and the remaining Messages and screen-share password checks.

## Access request flow

1. A visitor requests access with a username, email address, and 12+ character password.
2. The Worker stores the pending request and a PBKDF2 password hash in the `yoyolov-access` KV namespace.
3. The owner signs in through the Yoyolov page with the `ADMIN_TABS_PASSWORD` Worker secret and can approve or deny requests.
4. Approved users sign in with their username and password. The Worker issues a 12-hour signed token held in page memory.

The page no longer uses `MAIN_PASSWORD`. Keep `ADMIN_TABS_PASSWORD` private; it is also used to sign owner sessions. The Worker applies rate limits to access requests and login attempts and only accepts requests from the configured site origin.

## Cloudflare setup

The KV namespace `yoyolov-access` is bound as `ACCESS` in `wrangler.toml`. The checked-in namespace ID is for the current Cloudflare account. For a different account, create a KV namespace and replace that ID.

Required Worker secret:

- `ADMIN_TABS_PASSWORD`

The existing `MESSAGES_PASSWORD` and `SCREEN_SHARE_PASSWORD` secrets remain for their separate gates. They are not used for the main site sign-in.

The `ALLOWED_ORIGINS` plain-text variable should contain the site origin, currently:

```text
https://m6788928-byte.github.io
```

Deploy the Worker from this directory after changing its source or Wrangler configuration:

```sh
npx wrangler deploy
```

## Privacy and access limits

The access screen controls the Yoyolov application experience. The GitHub repository and game files are public, so someone can still open public assets directly without signing in. This flow does not make those files private or verify that a requester owns the email address they enter. Review the request details before approving accounts.
