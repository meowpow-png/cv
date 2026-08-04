# CV

[![CI](https://github.com/meowpow-png/cv/actions/workflows/ci.yml/badge.svg)](https://github.com/meowpow-png/cv/actions/workflows/ci.yml)
[![Release](https://img.shields.io/github/v/release/meowpow-png/cv)](https://github.com/meowpow-png/cv/releases/latest)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff)
![React](https://img.shields.io/badge/React-3f444c?logo=react)
![Playwright](https://custom-icon-badges.demolab.com/badge/Playwright-2EAD33?logo=playwright&logoColor=fff)

Reusable React components for building my CV, with different variants
generated from the same components by swapping content and configuration.

## What you'll find

MDX content rendered through React components to static HTML,
then printed to PDF with Playwright. No client runtime, no web page.

Latest version of my CV available in [releases](https://github.com/meowpow-png/cv/releases/latest).

## Getting started

To get your environment ready:

```sh
npm install
```

To generate the CV in PDF format:

```sh
just pdf
```

See [Usage](docs/USAGE.md) for detailed setup instructions.

## Further reading

- [Usage](docs/USAGE.md) — rendering and printing
- [Architecture](docs/ARCHITECTURE.md) — project structure and conventions
- [Quality](docs/QUALITY.md) — formatting, linting, type checking
- [Roadmap](docs/ROADMAP.md) — what's done, what's next

## License

Licensed under MIT License. See [LICENSE](LICENSE) for details.
