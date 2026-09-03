import * as React from 'react';
import { I as IconName } from './IconName.d-B2jRY55Q.d-B2jRY55Q.js';

declare const FONT_FAMILY: {
    readonly thin: "Phosphor-Thin";
    readonly light: "Phosphor-Light";
    readonly regular: "Phosphor-Regular";
    readonly bold: "Phosphor-Bold";
    readonly fill: "Phosphor-Fill";
    readonly duotone: "Phosphor-Duotone";
};
type Weight = keyof typeof FONT_FAMILY;

type IconProps = {
    name: IconName | (string & {});
    size?: number;
    color?: string;
    weight?: Weight;
};
declare function Icon({ name, size, color, weight }: IconProps): React.JSX.Element | null;

export { Icon, type IconProps, type Weight };
