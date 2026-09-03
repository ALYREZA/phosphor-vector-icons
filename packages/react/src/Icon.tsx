import * as React from "react";
import type { IconName } from "phosphor-core";
import { glyphMap, FONT_FAMILY, FONT_URL } from "phosphor-core";

export type Weight = "thin" | "light" | "regular" | "bold" | "fill";

export type IconProps = {
  name: IconName | (string & {});
  size?: number;
  color?: string;
  weight?: Weight;
};

const defaultWeight: Weight = "regular";

let didInjectFontFaces = false;

function ensureFontFacesInjected() {
  if (didInjectFontFaces) return;
  if (typeof document === "undefined") return;

  const styleId = "phosphor-icons-font-face";
  if (document.getElementById(styleId)) {
    didInjectFontFaces = true;
    return;
  }

  const styleEl = document.createElement("style");
  styleEl.id = styleId;
  styleEl.textContent = [
    `@font-face { font-family: "${FONT_FAMILY.thin}"; src: url("${FONT_URL.thin}") format("truetype"); font-style: normal; font-weight: 400; }`,
    `@font-face { font-family: "${FONT_FAMILY.light}"; src: url("${FONT_URL.light}") format("truetype"); font-style: normal; font-weight: 400; }`,
    `@font-face { font-family: "${FONT_FAMILY.regular}"; src: url("${FONT_URL.regular}") format("truetype"); font-style: normal; font-weight: 400; }`,
    `@font-face { font-family: "${FONT_FAMILY.bold}"; src: url("${FONT_URL.bold}") format("truetype"); font-style: normal; font-weight: 400; }`,
    `@font-face { font-family: "${FONT_FAMILY.fill}"; src: url("${FONT_URL.fill}") format("truetype"); font-style: normal; font-weight: 400; }`,
  ].join("\n");

  document.head.appendChild(styleEl);
  didInjectFontFaces = true;
}

function getCodepoint(name: string): number | undefined {
  return (glyphMap as Record<string, number>)[name];
}

export function Icon({ name, size = 16, color = "currentColor", weight = defaultWeight }: IconProps) {
  const codepoint = getCodepoint(name);
  const glyph = typeof codepoint === "number" ? String.fromCodePoint(codepoint) : null;

  React.useEffect(() => {
    ensureFontFacesInjected();
  }, []);

  if (!glyph) return null;

  return (
    <span
      style={{
        fontFamily: FONT_FAMILY[weight],
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

