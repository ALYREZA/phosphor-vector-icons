import glyphMapJson from "../glyphMap.json";
import type { IconName } from "../IconName";

export const glyphMap: Record<string, number> = glyphMapJson as Record<string, number>;

export type { IconName };

export type Weight = keyof typeof FONT_FAMILY;

export const FONT_FAMILY = {
  thin: "Phosphor-Thin",
  light: "Phosphor-Light",
  regular: "Phosphor-Regular",
  bold: "Phosphor-Bold",
  fill: "Phosphor-Fill",
  duotone: "Phosphor-Duotone"
} as const;

// Web renderer can use these URLs in @font-face rules.
const fontBase = import.meta.url.includes("/dist/")
  ? "../fonts/" // when running from `phosphor-core/dist/*`
  : "./fonts/"; // when bundled into the unified package root

export const FONT_URL = {
  thin: new URL(`${fontBase}Phosphor-Thin.ttf`, import.meta.url).href,
  light: new URL(`${fontBase}Phosphor-Light.ttf`, import.meta.url).href,
  regular: new URL(`${fontBase}Phosphor-Regular.ttf`, import.meta.url).href,
  bold: new URL(`${fontBase}Phosphor-Bold.ttf`, import.meta.url).href,
  fill: new URL(`${fontBase}Phosphor-Fill.ttf`, import.meta.url).href,
  duotone: new URL(`${fontBase}Phosphor-Duotone.ttf`, import.meta.url).href,
} as const;

