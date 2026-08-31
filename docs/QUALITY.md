# Quality

Quality check passes when:

- the project builds
- code is formatted, linted, and type-checked
- there are no unused exports or dependencies

Run all quality checks:

```sh
npm run qualitycheck
```

That runs all quality checks sequentially. It keeps going even if one of them fails, so you see everything that's wrong in one pass instead of one at a time.

## Formatting

Formatting uses Prettier, catching spacing, quotes, that kind of thing.

Instead of fixing it by hand, run:

```sh
npm run format
```

## Linting

Linting uses ESLint for JS/TS and Markdown, catching real bugs Prettier won't touch. ESLint doesn't understand CSS though, so Stylelint covers that instead.

Most of it can be fixed automatically too:

```sh
npm run lint:fix
```

## Type checking

Type checking uses plain `tsc --noEmit`. There's no auto-fix here, you actually have to fix the types:

```sh
npm run typecheck
```

## Build

The build script runs `tsc` then `tsc-alias`, so it doubles as a check that path aliases resolve correctly, not just that types are valid:

```sh
npm run build
```

## Exports and dependencies

Knip is used for flagging unused files, exports, and dependencies. No auto-fix here, if it flags something you either delete it or it's a false positive:

```sh
npm run knip
```

## Git hooks

Lefthook runs quality checks before every `git push`, so a broken build or failing check never leaves your machine.

Hooks are installed automatically by `prepare` script, which runs on `npm install` and `npm ci`, so there's nothing to set up by hand.
