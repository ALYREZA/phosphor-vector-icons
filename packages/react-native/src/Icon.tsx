import * as React from "react";
import { Text } from "react-native";
import type { IconName, Weight } from "phosphor-core";
import { glyphMap, FONT_FAMILY } from "phosphor-core";

export type { Weight };

export type IconProps = {
  name: IconName | (string & {});
  size?: number;
  color?: string;
  weight?: Weight;
};

const defaultWeight: Weight = "regular";

function getCodepoint(name: string): number | undefined {
  return (glyphMap as Record<string, number>)[name];
}

export function Icon({ name, size = 16, color = "black", weight = defaultWeight }: IconProps) {
  const codepoint = getCodepoint(name);
  const glyph = typeof codepoint === "number" ? String.fromCodePoint(codepoint) : null;

  if (!glyph) return null;

  return (
    <Text
      style={{
        fontFamily: FONT_FAMILY[weight],
        fontSize: size,
        color
      }}
      allowFontScaling={false}
      selectable={false}
    >
      {glyph}
    </Text>
  );
}
