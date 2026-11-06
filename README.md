# Yoyolov

A separately imported copy of The Universe, owned by `m6788928-byte`.

## Ownership and hosting

- This repository is independent of `susybakaboiii/TheUniverses`.
- The main catalog, Movies, Music, AI, and proxy tab paths are configured for this repository's GitHub Pages URL: https://m6788928-byte.github.io/yoyolov/
- GitHub Pages has not yet been enabled. The source repository is currently private.
- Do not publish this repository without reviewing its contents first; it includes large game/media assets.

## Backend services

The original repository contains only frontend launchers for Claude and Tas Proxy. It does not include the backend server source, deployment configuration, or server secrets. In this copy, those launchers are intentionally disconnected from the original Cloudflare tunnel addresses. No original server password is stored in this repository.

To activate these tabs, deploy your own backend services and set their URLs in `tabs/claude.html`, `tabs/tas.html`, and/or `tabs/tas-proxy.html`. Never commit passwords, API keys, or tokens to this repository.
