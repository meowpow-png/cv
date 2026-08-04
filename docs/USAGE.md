# Usage

This project turns a CV built from React components into a print-ready PDF.

There are two steps:

- render the CV to HTML
- print that HTML to PDF

There's no web page here. The HTML output exists to be printed, not served.

## Setup

Enable Corepack once per environment, so npm matches the version
pinned in `package.json`'s `packageManager` field:

```sh
corepack enable npm
```

Without this, npm falls back to whatever version ships with your
installed Node, which can silently drift from the version
`package-lock.json` was generated with.

## Development

```sh
npm run dev
```

Watches `src/` and re-renders on every change, serving
`dist/` with live reload so the browser updates automatically.

This is a local convenience for tuning styles.
The CV itself is still meant to be printed, not served.

## Rendering to HTML

```sh
npm run render
```

This writes a plain static file with the CSS already inlined,
so you can open it directly in a browser to check it before printing.

## Printing to PDF

```sh
npm run pdf
```

This does the same render, then prints the
result using headless Chromium via Playwright.

If Chromium isn't installed on your machine:

```sh
just pdf
```

This runs the same pipeline, only with Docker Compose.

## Output

Both commands write into `dist/`, which is generated and gitignored:

- `dist/cv.html` — the rendered page
- `dist/cv.pdf` — the printed PDF
