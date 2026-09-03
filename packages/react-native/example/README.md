# Expo (React Native) example (template)

This `App.tsx` renders `phosphor-vector-icons` using Expo’s `expo-font`.

## Use
1. In your Expo project:
   - `pnpm add phosphor-vector-icons`
   - `npx expo install expo-font`
2. (If you are testing from this repo source) run at the monorepo root:
   - `pnpm build`
3. Copy both `App.tsx` and `usePhosphorFonts.ts` from this folder into your Expo project.

## Why `expo-font` is needed
On React Native / Expo, fonts don’t get auto-registered. This template loads:
`Phosphor-Thin`, `Phosphor-Light`, `Phosphor-Regular`, `Phosphor-Bold`, `Phosphor-Fill`.

