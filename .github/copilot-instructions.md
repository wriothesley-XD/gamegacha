<!-- Guidance for AI coding agents working on the Game Gacha project -->
# Project overview

This is a small static web "gacha" demo implemented in plain HTML/CSS/JS. The UI and game logic live in [index.html](index.html) and [script.js](script.js). Character data and assets are stored under the repository root:

- Character JSON: [characters.json](characters.json) (editable canonical data)
- Character template: [character_template.json](character_template.json) (schema example)
- Images: `images/` (referenced via the `img` field)
- Sounds: `sounds/` (referenced via the `sound` field)

Big picture: the front-end picks a character based on either a quiz (`quizQuestions` → profile traits) or simple/random selection. See [script.js](script.js) for the scoring logic (`findBestCharacter()`) and global objects: `characters`, `characterTraits`, `nameMapping`, and `quizQuestions`.

# Data model and conventions

- Use the example in [character_template.json](character_template.json) as the authoritative schema. Key fields: `name`, `gender` (values: `male` / `female` / `anomali`), `img` (relative path), `sound` (relative path), `desc`, `details`, `words`, and `traits` (object with: `brave`, `smart`, `gentle`, `leader`, `warm`, `cautious`).
- Trait scale: integers typically 0–3 in existing data. The JS scoring normalizes using constants in `script.js` (adjust carefully if you change trait ranges).
- File path usage: JSON fields contain relative paths; place assets in `images/` and `sounds/` with matching filenames.
- Source of truth for bulk edits: edit `characters.json`. Note: `script.js` also contains an inlined `characters` array for quick runs — prefer modifying `characters.json` for persistent changes and admin tooling.

# Developer workflows (project-specific)

- Serve locally: this is a static site. Use a simple server (from project root):

```powershell
python -m http.server 8000
```

or use VS Code Live Server extension for quicker reloads.
- Edit characters:
  1. Copy `character_template.json` entries and add/modify entries in `characters.json`.
  2. Ensure `traits` is present and ordered; use `fix_json.ps1` to normalize ordering if needed.

- PowerShell helpers (Windows):
  - Generate many sample characters: `powershell -ExecutionPolicy Bypass -File .\add_characters.ps1`
  - Normalize / reorder traits and rewrite `characters.json`: `powershell -ExecutionPolicy Bypass -File .\fix_json.ps1`

# Important code locations

- Game logic & scoring: [script.js](script.js) — search for `findBestCharacter` and `similarity`/`compatibility` calculations.
- Trait data used by the frontend: the `characterTraits` object inside [script.js](script.js) is consulted for browse filters and scoring. Admin UI in `script.js` allows editing `characterTraits` and `nameMapping` at runtime.
- Character schema example: [character_template.json](character_template.json)
- Bulk-edit tooling: [add_characters.ps1](add_characters.ps1) and [fix_json.ps1](fix_json.ps1)

# Rules for AI edits (concise)

- Preserve the JSON schema shape in `characters.json`. Do not remove `traits` keys even if zero-valued.
- When adding a new character, add matching asset files in `images/` and `sounds/` and reference them with relative paths in the JSON.
- If you change trait scales or scoring constants, update the constants and add a short comment in `script.js` explaining the rationale and math (so future agents can find it).

# Examples

- Add a new character entry using the `character_template.json` shape and run `fix_json.ps1` to ensure ordering.
- To test locally after edits: run a static server, open `http://localhost:8000/index.html`, try the quiz and browse flows (search & filters rely on `characterTraits`).

If anything here is unclear or you'd like more detail (for example, specific `script.js` line references or test playback commands), tell me which area to expand.  