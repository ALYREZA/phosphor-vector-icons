# phosphor-vector-icons

Font-based Phosphor icon renderer for **React web** and **React Native**, using a unified API:

```tsx
import { Icon } from "phosphor-vector-icons";

<Icon
  name="user"
  size={32}
  color="red"
  weight="fill"
/>
```

The icon glyph is selected at runtime via a generated `glyphMap.json` (no per-icon imports).

## Installation

```bash
npm install phosphor-vector-icons
```

## Usage

```tsx
import { Icon } from "phosphor-vector-icons";

export function Example() {
  return <Icon name="user" size={24} color="black" weight="regular" />;
}
```

### Weights

Supported weights:

- `thin`
- `light`
- `regular`
- `bold`
- `fill`
- `duotone`

By default every weight is available. Call `configure` once at app startup if you only need some of them (for example Regular). Unconfigured `weight` values fall back to Regular when it is enabled, otherwise to the first configured weight.

```tsx
import { Icon, configure } from "phosphor-vector-icons";

configure({ weights: ["regular"] });

export function Example() {
  return <Icon name="user" size={24} color="black" />;
}
```

```tsx
configure({ weights: ["regular", "fill"] });
```

On the web this only injects `@font-face` rules for the configured TTFs. In Expo, only `require()` those same files:

```tsx
import { configure, FONT_FAMILY } from "phosphor-vector-icons";
import * as Font from "expo-font";

configure({ weights: ["regular"] });

Font.useFonts({
  [FONT_FAMILY.regular]: require("phosphor-vector-icons/fonts/Phosphor-Regular.ttf")
});
```

To omit unused TTF files from the compiled JS bundle, import a weight entry instead of the root package:

```tsx
import { Icon } from "phosphor-vector-icons/regular";
```

## Backend-driven payloads

Your backend can send:

```json
{
  "icon": "user",
  "weight": "regular"
}
```

Then render it without importing individual icons:

```tsx
import { Icon } from "phosphor-vector-icons";

type Payload = { icon: string; weight: "thin" | "light" | "regular" | "bold" | "fill" | "duotone" };

export function BackendIcon({ payload }: { payload: Payload }) {
  return <Icon name={payload.icon as any} weight={payload.weight} size={24} color="black" />;
}
```

If the icon name is unknown at runtime, the component renders `null` (no crash).

## Architecture (data flow)

The rendering pipeline is:

`name -> glyphMap -> unicode char -> font glyph -> rendered <Icon />`

Concretely:

- A generator reads the latest Phosphor SVGs from `@phosphor-icons/core`.
- It builds TTF fonts (per weight) and a `glyphMap.json` mapping icon names to codepoints.
- The runtime components look up `glyphMap[name]`, convert the codepoint to a Unicode character, and render that character using the matching font family.

## Scripts

Generate committed artifacts (fonts + glyphMap + `IconName.ts`):

```bash
pnpm generate-icons
```

Run tests:

```bash
pnpm test
```

## Contributor examples

Run the package in a real app from this repo (after `pnpm install` and `pnpm build`):

```bash
pnpm generate-icons   # if fonts are missing
pnpm build

# React web (Vite)
pnpm dev:react

# Expo / React Native
pnpm dev:expo
```

Or from the example folders:

```bash
pnpm --filter phosphor-icons-react-example dev
pnpm --filter phosphor-icons-expo-example start
```

- `packages/react/example` — Vite app
- `packages/react-native/example` — Expo app (`expo-font` loads the TTFs)
