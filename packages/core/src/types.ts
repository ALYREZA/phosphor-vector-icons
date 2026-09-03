import { glyphMap } from "./glyphMap";

export type IconName = keyof typeof glyphMap;

// Runtime list of all icon names (useful for validation/tests).
export const iconNames = Object.keys(glyphMap) as IconName[];
