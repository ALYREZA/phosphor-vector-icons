import { configure as configureImpl, FONT_FAMILY, FONT_FILE } from "phosphor-core";
import type { PhosphorIconsConfig as Config, Weight } from "phosphor-core";

export type PhosphorIconsConfig = Config;

export { FONT_FAMILY, FONT_FILE };

export function configure(config: PhosphorIconsConfig): void {
  configureImpl(config);
}

export type { Weight };
