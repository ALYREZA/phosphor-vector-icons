import * as react from 'react';
import { IconProps as IconProps$1 } from 'phosphor-icons-react-native/createIcon';

type Weight = "regular";
type IconProps = IconProps$1<Weight>;
declare const fontFamily: "Phosphor-Regular";
declare const fontFile: "Phosphor-Regular.ttf";
declare const Icon: ({ name, size, color, weight }: IconProps$1<"regular">) => react.JSX.Element | null;

export { Icon, type IconProps, type Weight, fontFamily, fontFile };
