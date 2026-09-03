import { createIcon, type IconProps as BaseIconProps } from "phosphor-icons-react/createIcon";

export type Weight = "fill";
export type IconProps = BaseIconProps<Weight>;

export const fontFamily = "Phosphor-Fill" as const;
export const fontFile = "Phosphor-Fill.ttf" as const;

export const Icon = createIcon({
  defaultWeight: "fill",
  fontUrls: {
    fill: new URL("./fonts/Phosphor-Fill.ttf", import.meta.url).href
  }
});
