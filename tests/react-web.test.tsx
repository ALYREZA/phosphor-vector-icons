// @vitest-environment jsdom
import { describe, expect, it, beforeEach } from "vitest";
import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Icon } from "../packages/react/src/Icon";
import { glyphMap, FONT_FAMILY } from "phosphor-core";
import type { Weight } from "phosphor-core";

const WEIGHTS = Object.keys(FONT_FAMILY) as Weight[];

describe("React web renderer", () => {
  beforeEach(() => {
    document.head.innerHTML = "";
  });

  it("renders the expected Unicode glyph for a name", async () => {
    const cp = glyphMap["user"];
    const glyph = String.fromCodePoint(cp);

    render(<Icon name="user" size={32} color="red" weight="regular" />);

    expect(screen.getByText(glyph)).toBeTruthy();

    await waitFor(() => {
      const styleEl = document.getElementById("phosphor-icons-font-face");
      expect(styleEl).toBeTruthy();
      expect(styleEl?.textContent).toContain("@font-face");
      for (const weight of WEIGHTS) {
        expect(styleEl?.textContent).toContain(FONT_FAMILY[weight]);
      }
    });
  });

  it.each(WEIGHTS)("selects fontFamily for weight=%s", (weight) => {
    const cp = glyphMap["user"];
    const glyph = String.fromCodePoint(cp);

    render(<Icon name="user" size={24} color="black" weight={weight} />);

    const span = screen.getByText(glyph) as HTMLSpanElement;
    expect(span.style.fontFamily).toBe(FONT_FAMILY[weight]);
    expect(span.style.fontSize).toBe("24px");
    expect(span.style.color).toBe("black");
  });

  it("returns null for an invalid icon name", () => {
    const { container } = render(<Icon name={"not-real" as any} weight="regular" />);
    expect(container.querySelector("span")).toBeNull();
  });
});
