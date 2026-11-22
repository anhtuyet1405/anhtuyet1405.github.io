# Implementation plan — Nheo vocabulary learning

Goal: build a responsive, offline-first vocabulary study app in `/home/kali/pentest/Nheo`, then verify its production build and run path.

Architecture: React/Vite/TypeScript SPA with client-side section navigation, native IndexedDB persistence, Papa Parse for CSV import, reusable study-set/card models, and Web Speech API fallback. Public static content is kept separate from personal IndexedDB data. GitHub Pages uses a relative base path and Actions deployment workflow.

Phases:
1. Inspect workspace and source CSV; establish Vite, React, TypeScript, Tailwind, Lucide, Papa Parse, and test/build scripts.
2. Implement typed data models, IndexedDB repository, CSV decoding/header detection/preview and starter template.
3. Implement responsive dashboard, navigation, set/card management, search, import/export, backup and settings.
4. Implement flashcards, learning questions, write practice, and generated tests with progress in local storage.
5. Implement accessible pronunciation controls, light/dark mode, responsive styling, and useful error/empty states.
6. Add README and GitHub Actions deployment workflow; run checks/build and smoke-test the running app.

Acceptance checks: npm install completes; TypeScript and production build pass; built HTML/assets exist; app can be served and returns successfully; imported values are rendered as text, not HTML; no user data is sent to a backend.

Decisions and caveats:
- The target directory was empty, so use a clean Vite starter.
- `/home/kali/pentest/a.csv` is extended-ASCII, not valid UTF-8, and contains visibly corrupted Vietnamese/IPA (`?` replacement); the importer must surface an encoding warning rather than inventing repaired text. Browser CSV import remains editable.
- User requested GitHub Pages, but no repository owner/name was supplied. Use a configurable relative Vite base; the README will explain project repository deployment.
- Local IndexedDB does not synchronize between browsers/devices.

## Review scheduling update

- The screenshot shows “Still learning” and “Know” controls on Flashcards.
- “Still learning” schedules the card one day later; “Know” schedules it five days later and marks it mastered. Each card stores its next review timestamp in IndexedDB. Existing cards remain compatible because the field is optional.

## XLSX import support

- `.xlsx` support uses SheetJS in the browser. Read the first worksheet as a 2D array, let shared header matching find the header, then use the existing editable preview/import flow.
- `.csv` path remains unchanged. XLSX formulas are not evaluated; displayed cached values are imported as text.
