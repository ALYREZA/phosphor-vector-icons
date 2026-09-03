import { createIcon, type IconProps as BaseIconProps } from "phosphor-icons-react-native/createIcon";

export type Weight = "duotone";
export type IconProps = BaseIconProps<Weight>;

export const fontFamily = "Phosphor-Duotone" as const;
export const fontFile = "Phosphor-Duotone.ttf" as const;

export const Icon = createIcon({ defaultWeight: "duotone", weights: ["duotone"] });
