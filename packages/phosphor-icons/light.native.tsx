import { createIcon, type IconProps as BaseIconProps } from "phosphor-icons-react-native/createIcon";

export type Weight = "light";
export type IconProps = BaseIconProps<Weight>;

export const fontFamily = "Phosphor-Light" as const;
export const fontFile = "Phosphor-Light.ttf" as const;

export const Icon = createIcon({ defaultWeight: "light", weights: ["light"] });
