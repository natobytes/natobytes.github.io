# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

The NatoBytes website — a **static site served by GitHub Pages** from the `main` branch of `natobytes.github.io`. There is no build step, package manager, bundler, or test suite. Files are served as-is at the repo root. **Deploy = commit to `main` and push**; GitHub Pages publishes automatically.

To preview locally, serve the directory over HTTP (e.g. `python3 -m http.server`) rather than opening files directly, so root-relative paths and images resolve.

## Structure & conventions

The repo hosts several independent pages that do not share assets or styling:

- **`index.html`** — the root NatoBytes marketing landing page ("Coding to new heights"). Hand-written and self-contained: root-level `styles.css` (~440 lines, **no framework** — Space Grotesk / Hanken Grotesk / JetBrains Mono pulled in via a Google Fonts `@import`) and `main.js` (scroll reveals, sticky-nav "altimeter" progress bar, mobile burger menu, the rubber-duck debugging quips). Edit those two files directly. Assets are in `assets/`: the hero phones and the FarmaPerto portfolio card use `app-home.webp` / `app-map.webp` / `app-detail.webp`, which are **downscaled regenerations of `farmaperto/screenshots/{home,map,detail}.png`** (`cwebp -q 82 -resize 680 0 …`) — regenerate them if those source screenshots change. `assets/og.png` is the 1200×630 Open Graph share image. The portfolio "FarmaPerto" card links to the in-repo `farmaperto/` page.
- **`farmaperto/`** — self-contained landing page for the FarmaPerto app. Hand-written `farmaperto/styles.css` (~80 lines, no framework) and inline JS. **Bilingual (PT/EN)**: both languages live in the same HTML inside `[data-lang="pt"]` / `[data-lang="en"]` blocks; an inline script toggles the `.show` class based on a language button, `localStorage` (`fp_lang`), then `navigator.language`. When editing copy, update **both** language blocks.
- **`farmaperto/pt/privacy/` and `farmaperto/en/privacy/`** — the two privacy policy pages for FarmaPerto, linked from its footer. These are parallel translations — keep them in sync when one changes.
- **`privacy/pumppad.html`** — standalone privacy policy for a separate app (PumpPad).
- **`google44dca4b016cf0a98.html`** — Google Search Console verification file; do not rename or delete.

Each top-level page/app is independent. When adding a new product landing page, follow the `farmaperto/` pattern (own folder, self-contained styles).
