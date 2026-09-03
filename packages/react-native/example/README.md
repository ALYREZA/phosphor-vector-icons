# Expo example

Runnable Expo app that renders `phosphor-vector-icons` after loading the TTF fonts with `expo-font`.

## Run

From the repo root:

```bash
pnpm install
pnpm generate-icons   # if `packages/phosphor-icons/fonts/*.ttf` are missing
pnpm build
pnpm dev:expo
```

Or from this folder:

```bash
pnpm start
```

Then open iOS Simulator, Android emulator, or Expo Go.

This example renders every weight: `thin`, `light`, `regular`, `bold`, `fill`, `duotone`.

Fonts loaded via `expo-font`:
`Phosphor-Thin`, `Phosphor-Light`, `Phosphor-Regular`, `Phosphor-Bold`, `Phosphor-Fill`, `Phosphor-Duotone`.

If you see empty boxes instead of icons, the fonts did not load — confirm `packages/phosphor-icons/fonts/*.ttf` exist after `pnpm generate-icons && pnpm build`.
