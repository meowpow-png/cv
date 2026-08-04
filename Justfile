set shell := ["bash", "-eu", "-o", "pipefail", "-c"]

# List available recipes
default:
    @just --list

# Run Codex in Docker container
[arg("args", help="Command arguments")]
codex *args:
    @docker compose run --rm codex {{ args }}

# Run Claude in Docker container
[arg("args", help="Command arguments")]
claude *args:
    @docker compose run --rm claude {{ args }}

# Run Playwright in Docker container
[arg("args", help="Command arguments")]
playwright *args:
    @docker compose run --rm playwright {{ args }}

# Render CV to PDF
pdf:
    @just playwright npm run pdf
