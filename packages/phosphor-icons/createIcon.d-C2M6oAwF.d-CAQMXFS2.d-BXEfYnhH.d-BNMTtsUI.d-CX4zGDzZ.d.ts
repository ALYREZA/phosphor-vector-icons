import { W as Weight, I as IconName } from './fonts.d-rAGdQ7Gi.d-rAGdQ7Gi.d-rAGdQ7Gi.d-rAGdQ7Gi.d-rAGdQ7Gi.js';

type IconProps<W extends Weight = Weight> = {
    name: IconName | (string & {});
    size?: number;
    color?: string;
    weight?: W;
};

export type { IconProps as I };
