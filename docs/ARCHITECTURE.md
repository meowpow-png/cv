# Architecture

## Overview

The project follows a section-oriented architecture that groups
related CV content and its rendering logic into self-contained modules.
A "section" here is a CV building block, not a page.

There is no client runtime. Everything is rendered once via
`react-dom/server` to static HTML, which Playwright then prints to PDF.

The architecture emphasizes clear boundaries, explicit data flow, and minimal complexity.

## Design Principles

- Section-oriented organization
- Explicit separation of UI and application logic
- Self-contained sections
- Shared functionality through common modules
- Minimal architectural complexity

## Project Structure

```text
src/
    content/
    sections/
    shared/
        assets/
            icons/
    App.tsx
    main.tsx
```

| Module                 | Responsibility                    |
| ---------------------- | --------------------------------- |
| `content/`             | Authored MDX content              |
| `sections/`            | Self-contained CV building blocks |
| `shared/`              | Reusable components and utilities |
| `shared/assets/icons/` | Reusable SVG icon assets          |

## Sections

A section is a CV building block (e.g. Hero, Experience, Education, Skills).

A typical section is a flat set of files: the component, its colocated
CSS, and an `index.ts` re-exporting the public API. Props are typed
inline in the component file. No separate `types.ts` is needed
unless a section grows enough to need one.

**Rules**

- Sections are self-contained
- Sections must not depend on other sections
- External consumers import through the section's `index.ts`
- Deep imports into a section's internal files are not allowed

## Shared Modules

Shared modules contain reusable code used across multiple sections.

Reusable SVG icons are stored in `src/shared/assets/icons/`.

**Rules**

- Shared modules must not depend on section modules
- A shared submodule exposes `index.ts` once it has more than one exported member
- A single-file module is imported directly

## Content

Authored MDX content lives in `src/content/`, one submodule per CV variant.
Sections render content; MDX may use shared modules but must not depend on section modules.

Each content submodule exposes its data through `index.ts`.

## Styling

Styles are colocated with the components they belong to as plain CSS
since there's no bundler to process them. Class names follow
this convention to avoid collision:

```text
component-name / component-name-part
```

Shared styles belong in `shared/`.

Global design tokens (colors, fonts) are CSS custom properties on `:root`
in `shared/tokens.css`, loaded before all other stylesheets.

## Imports

Imports are grouped by purpose:

1. Runtime dependencies
2. Type-only imports
3. Static assets

A module is imported through `index.ts`, never through an internal file path.

## Dependency Rules

```text
sections
    ↓
shared, content

content
    ↓
shared

App
    ↓
sections, shared

main
    ↓
App
```

**Rules**

- Sections must not depend on other sections
- Shared modules must not depend on section modules
- Content must not depend on section modules
- `App` composes sections into a CV variant but contains no application logic
- `main` renders `App` via `react-dom/server` to static HTML; it does not bootstrap a client
