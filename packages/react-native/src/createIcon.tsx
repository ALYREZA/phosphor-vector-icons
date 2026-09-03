import { Text } from "react-native";
import type { IconName, Weight } from "phosphor-core";
import { glyphMap, FONT_FAMILY, resolveWeight } from "phosphor-core";

export type { Weight };

export type IconProps<W extends Weight = Weight> = {
  name: IconName | (string & {});
  size?: number;
  color?: string;
  weight?: W;
};

function getCodepoint(name: string): number | undefined {
  return (glyphMap as Record<string, number>)[name];
}

export function createIcon<W extends Weight = Weight>(options: {
  defaultWeight: W;
  weights?: readonly W[];
}) {
  const available = options.weights ?? (Object.keys(FONT_FAMILY) as W[]);

  function Icon({
    name,
    size = 16,
    color = "black",
    weight = options.defaultWeight
  }: IconProps<W>) {
    const resolvedWeight = resolveWeight(weight, available);
    const codepoint = getCodepoint(name);
    const glyph = typeof codepoint === "number" ? String.fromCodePoint(codepoint) : null;

    if (!glyph) return null;

    return (
      <Text
        style={{
          fontFamily: FONT_FAMILY[resolvedWeight],
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

  return Icon;
}
