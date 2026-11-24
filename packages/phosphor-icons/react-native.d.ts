import * as react from 'react';
import { W as Weight, I as IconName } from './public-config-DuB93gcV.js';
export { F as FONT_FAMILY, a as FONT_FILE, P as PhosphorIconsConfig, c as configure } from './public-config-DuB93gcV.js';

type IconProps<W extends Weight = Weight> = {
    name: IconName | (string & {});
    size?: number;
    color?: string;
    weight?: W;
};

declare const Icon: ({ name, size, color, weight }: IconProps<"bold" | "duotone" | "fill" | "light" | "regular" | "thin">) => react.JSX.Element | null;

export { FONT_FAMILY, FONT_FILE, Icon, configure, type IconProps, type PhosphorIconsConfig, type Weight };
