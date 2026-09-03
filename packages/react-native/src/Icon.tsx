import type { Weight } from "phosphor-core";
import { createIcon } from "./createIcon";

export type { IconProps, Weight } from "./createIcon";

export const Icon = createIcon<Weight>({ defaultWeight: "regular" });
