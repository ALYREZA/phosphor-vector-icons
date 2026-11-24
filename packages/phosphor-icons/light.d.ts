import { IconProps as IconProps$1 } from 'phosphor-icons-react/createIcon';

type Weight = "light";
type IconProps = IconProps$1<Weight>;
declare const fontFamily: "Phosphor-Light";
declare const fontFile: "Phosphor-Light.ttf";
declare const Icon: ({ name, size, color, weight }: IconProps$1<"light">) => React.JSX.Element | null;

export { Icon, type IconProps, type Weight, fontFamily, fontFile };
