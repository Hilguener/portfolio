# Portfolio — Hilguener Ferreira Silva

Static portfolio site: home page, a case-studies page, and a lightweight
EN/PT i18n layer. No build step — plain HTML, CSS, and vanilla JS.

## Structure

```
index.html          Home page (hero, projects, experience, tools, contact)
case-studies.html    Data & BI case studies
styles.css           Shared styles for both pages
script.js            i18n toggle (EN/PT) + mobile nav toggle
fonts/               Self-hosted Archivo, Inter, IBM Plex Mono (woff2)
favicon.svg          Favicon
robots.txt / sitemap.xml
```

## i18n

English text lives directly in the HTML (`data-i18n="key"` marks the
element). `script.js` holds only the Portuguese translation for each key;
switching back to English restores the original HTML content rather than
looking anything up. Elements whose translation contains markup (line
breaks, `<span>`) are marked with `data-i18n-html` so they're swapped via
`innerHTML` instead of `textContent`. The chosen language persists in
`localStorage` and defaults to the browser's language on first visit.

## Local development

No build tooling required — open `index.html` directly, or serve the
folder to avoid `file://` quirks:

```bash
python -m http.server 8000
```

## Fonts

Fonts are self-hosted under `fonts/` (latin + latin-ext subsets only) to
avoid a third-party request to Google Fonts on every page load. Regenerate
by fetching `https://fonts.googleapis.com/css2?family=...` with a modern
browser `User-Agent` and downloading the referenced `.woff2` files.
