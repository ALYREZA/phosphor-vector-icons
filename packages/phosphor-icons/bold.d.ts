import { IconProps as IconProps$1 } from 'phosphor-icons-react/createIcon';

type Weight = "bold";
type IconProps = IconProps$1<Weight>;
declare const fontFamily: "Phosphor-Bold";
declare const fontFile: "Phosphor-Bold.ttf";
declare const Icon: ({ name, size, color, weight }: IconProps$1<"bold">) => React.JSX.Element | null;

export { Icon, type IconProps, type Weight, fontFamily, fontFile };
