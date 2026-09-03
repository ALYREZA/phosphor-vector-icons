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

If you see empty boxes instead of icons, the fonts did not load — confirm `packages/phosphor-icons/fonts/*.ttf` exist after `pnpm generate-icons && pnpm build`.
