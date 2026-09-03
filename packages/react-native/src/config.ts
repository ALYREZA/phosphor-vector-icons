import { configure as configureImpl, FONT_FAMILY, FONT_FILE } from "phosphor-core";
import type { PhosphorIconsConfig } from "phosphor-core";

export type { PhosphorIconsConfig };
export { FONT_FAMILY, FONT_FILE };

export function configure(config: PhosphorIconsConfig): void {
  configureImpl(config);
}
