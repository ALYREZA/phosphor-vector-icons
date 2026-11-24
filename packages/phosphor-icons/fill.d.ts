import { IconProps as IconProps$1 } from 'phosphor-icons-react/createIcon';

type Weight = "fill";
type IconProps = IconProps$1<Weight>;
declare const fontFamily: "Phosphor-Fill";
declare const fontFile: "Phosphor-Fill.ttf";
declare const Icon: ({ name, size, color, weight }: IconProps$1<"fill">) => React.JSX.Element | null;

export { Icon, type IconProps, type Weight, fontFamily, fontFile };
