# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/2.0.0/), and this project adheres to CalVer.

## [Unreleased]

## [2026.08.2] - 2026-08-31

### Changed

- Section headers now use body sans-serif font and standard text color
- Dropped the monospace `$` prompt styling from section headers
- Added a horizontal rule below each section header, with padding added to section content
- Removed the accent-colored marker bars to the left of each project
- Added IBM Plex Sans 500 and 600 weights alongside the existing 400 and 700

### Fixed

- Profile section styles were not applying due to a class name casing mismatch

## [2026.08.1] - 2026-08-05

### Changed

- Reworded profile bio to mention personal project experience

## [2026.08.0] - 2026-08-04

### Added

- Hero, Profile, Skills, Projects, Education, and Footer sections
- MDX content pipeline, rendering each section from authored content
- PDF export via headless Chromium, printed to a standard A4 page

[Unreleased]: https://github.com/meowpow-png/cv/compare/v2026.08.2...HEAD
[2026.08.2]: https://github.com/meowpow-png/cv/releases/tag/v2026.08.2
[2026.08.1]: https://github.com/meowpow-png/cv/releases/tag/v2026.08.1
[2026.08.0]: https://github.com/meowpow-png/cv/releases/tag/v2026.08.0
