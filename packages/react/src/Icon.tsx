import type { Weight } from "phosphor-core";
import { FONT_URL } from "phosphor-core/font-urls";
import { createIcon } from "./createIcon";

export type { IconProps, Weight } from "./createIcon";

export const Icon = createIcon<Weight>({
  defaultWeight: "regular",
  fontUrls: FONT_URL
});
