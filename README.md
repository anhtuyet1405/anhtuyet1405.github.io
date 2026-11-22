# Nheo — vocabulary practice, kept local

A responsive React + TypeScript vocabulary learning app. No account or backend: study sets and settings live in this browser's IndexedDB and do not sync to other devices.

## Run locally

```sh
npm ci
npm run dev
```

Production build: `npm run build`; preview it with `npm run preview`.

## Import CSV

Import `.csv` (UTF-8 with or without BOM) or `.xlsx` workbooks. XLSX imports use the first worksheet. Both formats require a header row; column names are case-insensitive and columns may be reordered. Supported header aliases include WORDS/WORD/ENGLISH, SOUND/AUDIO, IPA/PHONETIC, MEANING/DEFINITION/VIETNAMESE, and EXAMPLE/SENTENCE. Quoted commas and newlines are supported. Empty lines are ignored. Every import is previewed; incomplete values remain blank and can be edited later. For absent IPA, the app displays “Not available”; absent meaning displays “No definition provided”; absent example is omitted. Missing SOUND falls back to speech synthesis.

`example.csv` is a UTF-8 sample. The supplied `/home/kali/pentest/a.csv` is legacy extended-ASCII and has corrupted Vietnamese/IPA characters already replaced by `?`; those characters cannot be reconstructed. Re-export the source as UTF-8 or edit affected cards after import. The importer reports replacement/control characters when detected.

## Study

Create or import sets, manage cards, search/filter/sort, export a set as CSV, and study with Flashcards, Learn, Write, and Test. Settings include theme, playback speed, study direction preference, auto-flip preference, data backup/restore, and reset. Speech uses a supplied audio URL when available and falls back to Web Speech if playback fails.

## GitHub Pages

Push this project to the `main` branch of a GitHub repository. In repository Settings → Pages, set the deployment source to **GitHub Actions**. The workflow builds using the repository name as Vite's project-site base path and deploys `dist`. For a user-site repository named `<owner>.github.io`, change the Vite base to `/` (the current workflow config is for project repositories). No credentials or API keys are needed.

## Data and privacy

Personal sets and progress are stored locally in IndexedDB. Export a JSON backup before clearing browser storage. Data does not automatically synchronize across browsers/devices. Public static vocabulary sets are not bundled; the repository can add curated public JSON files in a later update.

## Stack

React, Vite, TypeScript, Tailwind CSS, Lucide React, Papa Parse, IndexedDB (`idb`), Web Speech API, GitHub Actions / Pages.
