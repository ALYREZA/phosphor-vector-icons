# React example (template)

This `App.tsx` renders `phosphor-vector-icons` using different icon weights and a couple of props, so contributors can quickly verify web rendering.

## Use
1. In your React web project:
   - `pnpm add phosphor-vector-icons`
2. (If you are testing from this repo source) run at the monorepo root:
   - `pnpm build`
3. Copy `App.tsx` from this folder into your app (e.g. into `src/App.tsx`).

## What it tests
- `weight="regular" | "bold" | "fill"`
- Different props (`name`, `size`, `color`)
- Invalid icon name returns `null` (should not crash)

