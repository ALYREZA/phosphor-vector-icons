import * as React from "react";
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

function fontFaceCss(family: string, url: string): string {
  return `@font-face { font-family: "${family}"; src: url("${url}") format("truetype"); font-style: normal; font-weight: 400; }`;
}

export function createIcon<W extends Weight = Weight>(options: {
  defaultWeight: W;
  fontUrls: Record<W, string>;
}) {
  const available = Object.keys(options.fontUrls) as W[];

  function ensureFontFace(weight: W) {
    if (typeof document === "undefined") return;

    const styleId = `phosphor-icons-font-face-${weight}`;
    if (document.getElementById(styleId)) return;

    const styleEl = document.createElement("style");
    styleEl.id = styleId;
    styleEl.textContent = fontFaceCss(FONT_FAMILY[weight], options.fontUrls[weight]);
    document.head.appendChild(styleEl);
  }

  function Icon({
    name,
    size = 16,
    color = "currentColor",
    weight = options.defaultWeight
  }: IconProps<W>) {
    const resolvedWeight = resolveWeight(weight, available);
    const codepoint = getCodepoint(name);
    const glyph = typeof codepoint === "number" ? String.fromCodePoint(codepoint) : null;

    React.useEffect(() => {
      ensureFontFace(resolvedWeight);
    }, [resolvedWeight]);

    if (!glyph) return null;

    return (
      <span
        style={{
          fontFamily: FONT_FAMILY[resolvedWeight],
          fontSize: size,
          color,
          lineHeight: 1,
          display: "inline-block"
        }}
        aria-hidden={true}
      >
        {glyph}
      </span>
    );
  }

  return Icon;
}
