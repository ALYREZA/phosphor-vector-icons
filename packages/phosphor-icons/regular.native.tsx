import { createIcon, type IconProps as BaseIconProps } from "phosphor-icons-react-native/createIcon";

export type Weight = "regular";
export type IconProps = BaseIconProps<Weight>;

export const fontFamily = "Phosphor-Regular" as const;
export const fontFile = "Phosphor-Regular.ttf" as const;

export const Icon = createIcon({ defaultWeight: "regular", weights: ["regular"] });
