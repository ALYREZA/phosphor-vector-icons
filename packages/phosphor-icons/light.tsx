import { createIcon, type IconProps as BaseIconProps } from "phosphor-icons-react/createIcon";

export type Weight = "light";
export type IconProps = BaseIconProps<Weight>;

export const fontFamily = "Phosphor-Light" as const;
export const fontFile = "Phosphor-Light.ttf" as const;

export const Icon = createIcon({
  defaultWeight: "light",
  fontUrls: {
    light: new URL("./fonts/Phosphor-Light.ttf", import.meta.url).href
  }
});
