import { IconProps as IconProps$1 } from 'phosphor-icons-react/createIcon';

type Weight = "duotone";
type IconProps = IconProps$1<Weight>;
declare const fontFamily: "Phosphor-Duotone";
declare const fontFile: "Phosphor-Duotone.ttf";
declare const Icon: ({ name, size, color, weight }: IconProps$1<"duotone">) => React.JSX.Element | null;

export { Icon, type IconProps, type Weight, fontFamily, fontFile };
