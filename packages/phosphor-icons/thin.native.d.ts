import * as react from 'react';
import { IconProps as IconProps$1 } from 'phosphor-icons-react-native/createIcon';

type Weight = "thin";
type IconProps = IconProps$1<Weight>;
declare const fontFamily: "Phosphor-Thin";
declare const fontFile: "Phosphor-Thin.ttf";
declare const Icon: ({ name, size, color, weight }: IconProps$1<"thin">) => react.JSX.Element | null;

export { Icon, type IconProps, type Weight, fontFamily, fontFile };
