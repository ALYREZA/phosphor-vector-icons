import { createIcon, type IconProps as BaseIconProps } from "phosphor-icons-react/createIcon";

export type Weight = "duotone";
export type IconProps = BaseIconProps<Weight>;

export const fontFamily = "Phosphor-Duotone" as const;
export const fontFile = "Phosphor-Duotone.ttf" as const;

export const Icon = createIcon({
  defaultWeight: "duotone",
  fontUrls: {
    duotone: new URL("./fonts/Phosphor-Duotone.ttf", import.meta.url).href
  }
});
