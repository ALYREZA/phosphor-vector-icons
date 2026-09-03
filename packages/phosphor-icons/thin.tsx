import { createIcon, type IconProps as BaseIconProps } from "phosphor-icons-react/createIcon";

export type Weight = "thin";
export type IconProps = BaseIconProps<Weight>;

export const fontFamily = "Phosphor-Thin" as const;
export const fontFile = "Phosphor-Thin.ttf" as const;

export const Icon = createIcon({
  defaultWeight: "thin",
  fontUrls: {
    thin: new URL("./fonts/Phosphor-Thin.ttf", import.meta.url).href
  }
});
