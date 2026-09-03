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

type Payload = { icon: string; weight: "thin" | "light" | "regular" | "bold" | "fill" };

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

If you want to quickly verify the renderer in a real app (instead of unit tests), see:
- `packages/react/example` (React web usage template)
- `packages/react-native/example` (Expo / React Native usage template + `expo-font` setup)

