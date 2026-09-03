import { createIcon, type IconProps as BaseIconProps } from "phosphor-icons-react/createIcon";

export type Weight = "bold";
export type IconProps = BaseIconProps<Weight>;

export const fontFamily = "Phosphor-Bold" as const;
export const fontFile = "Phosphor-Bold.ttf" as const;

export const Icon = createIcon({
  defaultWeight: "bold",
  fontUrls: {
    bold: new URL("./fonts/Phosphor-Bold.ttf", import.meta.url).href
  }
});
