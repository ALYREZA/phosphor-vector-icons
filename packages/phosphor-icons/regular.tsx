import { createIcon, type IconProps as BaseIconProps } from "phosphor-icons-react/createIcon";

export type Weight = "regular";
export type IconProps = BaseIconProps<Weight>;

export const fontFamily = "Phosphor-Regular" as const;
export const fontFile = "Phosphor-Regular.ttf" as const;

export const Icon = createIcon({
  defaultWeight: "regular",
  fontUrls: {
    regular: new URL("./fonts/Phosphor-Regular.ttf", import.meta.url).href
  }
});
