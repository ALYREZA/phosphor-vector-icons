# React example (Vite)

Runnable web app that renders `phosphor-vector-icons`.

## Run

From the repo root:

```bash
pnpm install
pnpm generate-icons   # if `packages/phosphor-icons/fonts/*.ttf` are missing
pnpm build
pnpm dev:react
```

Or from this folder:

```bash
pnpm dev
```

Vite prints a local URL (usually `http://localhost:5173`).

This example renders every weight: `thin`, `light`, `regular`, `bold`, `fill`, `duotone`.

Consumers can call `configure({ weights: ["regular"] })` to use a single family, or import from `phosphor-vector-icons/regular`.
