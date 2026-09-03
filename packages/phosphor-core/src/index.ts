import glyphMapJson from "../glyphMap.json";
import type { IconName } from "../IconName";

export const glyphMap: Record<string, number> = glyphMapJson as Record<string, number>;

export type { IconName };

export { FONT_FAMILY, WEIGHTS } from "./fonts";
export type { Weight } from "./fonts";
export { FONT_FILE } from "./fontFiles";
export { configure, getConfiguredWeights, resolveWeight, resetConfig } from "./config";
export type { PhosphorIconsConfig } from "./config";

// Import FONT_URL from `phosphor-core/font-urls` so single-weight entries
// and React Native do not evaluate every `new URL(...ttf)`.
