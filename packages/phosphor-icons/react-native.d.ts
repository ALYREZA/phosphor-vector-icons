import * as react from 'react';
import { I as IconName } from './IconName.d-B2jRY55Q.d-B2jRY55Q.d-B2jRY55Q.d-B2jRY55Q.d-B2jRY55Q.d-B2jRY55Q.d-B2jRY55Q.d-B2jRY55Q.d-B2jRY55Q.d-B2jRY55Q.d-B2jRY55Q.d-B2jRY55Q.d-B2jRY55Q.d-B2jRY55Q.js';

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

declare const FONT_FILE: {
    readonly thin: "Phosphor-Thin.ttf";
    readonly light: "Phosphor-Light.ttf";
    readonly regular: "Phosphor-Regular.ttf";
    readonly bold: "Phosphor-Bold.ttf";
    readonly fill: "Phosphor-Fill.ttf";
    readonly duotone: "Phosphor-Duotone.ttf";
};
type PhosphorIconsConfig = {
    weights?: readonly Weight[];
};
declare function configure(config: PhosphorIconsConfig): void;

declare function Icon({ name, size, color, weight }: IconProps): react.JSX.Element | null;

export { FONT_FAMILY, FONT_FILE, Icon, configure, type IconProps, type PhosphorIconsConfig, type Weight };
