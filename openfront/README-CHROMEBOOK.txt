OPENFRONT — OFFLINE SOLO (CHROMEBOOK)
======================================

This package contains the production browser client and its bundled maps/assets.
OpenFront's Solo mode runs its simulation in the browser using its built-in LocalServer.
No public lobby, multiplayer backend, or always-on PC is required for Solo play.

FIRST SETUP
-----------
1. Enable the Chromebook Linux development environment.
2. Move this ZIP into Linux files.
3. In the Linux Terminal, run:

   cd ~
   unzip -q OpenFront_Solo_Offline_Chromebook.zip
   cd ~/OpenFrontOffline
   bash start-openfront.sh

4. Keep Terminal open while playing.
5. Open Game Hub > OpenFront > Launch Offline, or visit:
   http://127.0.0.1:8000/

Each Chromebook runs its own copy and its own local Solo simulation. Your PC does
not need to remain on. The first extraction is large (about 722 MB uncompressed).

STOPPING
--------
Press Ctrl+C in the Terminal window.

NOTES
-----
- The local HTTP server only serves the files to this Chromebook; it is not a
  multiplayer game server.
- Singleplayer game turns and AI are processed locally in the browser.
- Sign-in, cosmetics, cloud saves, public lobbies, and archived-game uploads
  are online features and are not part of offline Solo play.
- OpenFront source is AGPL-3.0; asset licensing is CC BY-SA 4.0. See LICENSE
  and LICENSE-ASSETS in this package. Preserve the project's attribution.
