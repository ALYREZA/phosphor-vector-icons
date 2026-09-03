export const FONT_FAMILY = {
  thin: "Phosphor-Thin",
  light: "Phosphor-Light",
  regular: "Phosphor-Regular",
  bold: "Phosphor-Bold",
  fill: "Phosphor-Fill",
  duotone: "Phosphor-Duotone"
} as const;

export type Weight = keyof typeof FONT_FAMILY;

export const WEIGHTS = Object.keys(FONT_FAMILY) as Weight[];
