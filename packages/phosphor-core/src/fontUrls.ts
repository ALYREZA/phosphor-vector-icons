import { FONT_FILE } from "./fontFiles";
import type { Weight } from "./fonts";

// Web renderer can use these URLs in @font-face rules.
const fontBase = import.meta.url.includes("/dist/")
  ? "../fonts/" // when running from `phosphor-core/dist/*`
  : "./fonts/"; // when bundled into the unified package root

export const FONT_URL: Record<Weight, string> = {
  thin: new URL(`${fontBase}${FONT_FILE.thin}`, import.meta.url).href,
  light: new URL(`${fontBase}${FONT_FILE.light}`, import.meta.url).href,
  regular: new URL(`${fontBase}${FONT_FILE.regular}`, import.meta.url).href,
  bold: new URL(`${fontBase}${FONT_FILE.bold}`, import.meta.url).href,
  fill: new URL(`${fontBase}${FONT_FILE.fill}`, import.meta.url).href,
  duotone: new URL(`${fontBase}${FONT_FILE.duotone}`, import.meta.url).href
};
