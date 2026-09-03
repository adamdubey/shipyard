# ⚓ Shipyard

**Shipyard is a GitHub-native PR delivery pipeline built around fast, automated feedback for pull requests.**

The goal is to take a feature branch through validation, preview deployment, browser testing, review, production deployment, and cleanup while keeping the entire delivery workflow inside GitHub.

## Project Goals

Shipyard is built around two ideas:

### PR Preview Factory

Every pull request will eventually move through a delivery pipeline like:

```text
Feature branch
    ↓
Pull request
    ↓
Lint + unit tests
    ↓
Build
    ↓
PR preview deployment
    ↓
Browser E2E tests
    ↓
Required checks
    ↓
Review + merge
    ↓
Production deployment
    ↓
Preview cleanup
```

Each PR will receive an isolated preview environment containing build metadata such as:

* environment
* PR number
* branch
* commit SHA
* build timestamp

### CI Speedrun

Shipyard also serves as a CI optimization project.

The pipeline will first be implemented in a straightforward form and benchmarked. It will then be improved using techniques including:

* dependency caching
* parallel jobs
* build artifact reuse
* concurrency cancellation
* conditional execution

The goal is to measure the effect these changes have on the pull-request feedback loop.

## Technology

The application and delivery pipeline use:

* React
* TypeScript
* Vite
* npm
* ESLint
* Vitest
* React Testing Library
* Docker / Docker Compose
* GitHub Actions
* GitHub Pages
* Playwright *(planned)*

No external cloud infrastructure is required.

## Local Development

Local development is Docker-first.

You do **not** need Node, npm, Vite, Vitest, or browser-testing dependencies installed directly on your machine.

You need:

* Docker
* Docker Compose
* Git

Start the development server:

```bash
docker compose up app
```

Then open:

```text
http://localhost:5173
```

Source files are bind-mounted into the container, so local edits are reflected by the development server.

## Validation

Run linting:

```bash
docker compose run --rm app npm run lint
```

Run unit tests:

```bash
docker compose run --rm app npm run test
```

Run a production build:

```bash
docker compose run --rm app npm run build
```

These commands execute the project's Node tooling inside Docker.

## Continuous Integration

Pull requests targeting `main` run the baseline GitHub Actions validation pipeline:

```text
Checkout
   ↓
Install dependencies
   ↓
Lint
   ↓
Unit tests
   ↓
Build
```

This pipeline is intentionally straightforward.

Its performance will serve as the baseline for the CI optimization phase of the project.

## Planned Delivery Pipeline

The completed project will support:

```text
PR opened / updated
        ↓
Pre-deployment validation
        ↓
Application build
        ↓
Isolated PR preview
        ↓
Playwright E2E validation
        ↓
Required GitHub checks
        ↓
Human review
        ↓
Merge to main
       /     \
      ↓       ↓
Production   Preview cleanup
deployment
      ↓
Smoke test
```

PR previews and production will be hosted using GitHub Pages.
