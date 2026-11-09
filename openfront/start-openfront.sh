#!/bin/sh
set -eu
cd "$(dirname "$0")"
PORT="${PORT:-8000}"
echo "OpenFront Offline Solo"
echo "Serving this Chromebook at http://127.0.0.1:${PORT}/"
echo "Open Game Hub > OpenFront > Launch Offline."
echo "Press Ctrl+C to stop."
exec python3 -m http.server "$PORT" --bind 127.0.0.1
