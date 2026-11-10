# Grok handoff — apply the admin-desk defence

Read this file and apply it. This is the DFTC launch hub, not the CarTune server.

1. Keep `support/defensive/defense.js`.
2. Run `scanBundle` on shipped client source. A failed check blocks the ship.
3. Do not add vehicle commands, remote unlock, or a new permission system.
4. Do not put passwords or API keys in client HTML or JS.

CarTune's admin account (help, discounts, emergencies) is documented in `joycechinnock-pixel/cartune` `GROK-HANDOFF.md`. Do not copy that server into this repo.
