// @vitest-environment jsdom
import { describe, expect, it, beforeEach } from "vitest";
import * as React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Icon } from "../packages/react/src/Icon";
import { createIcon } from "../packages/react/src/createIcon";
import { glyphMap, FONT_FAMILY, configure, resetConfig } from "phosphor-core";
import type { Weight } from "phosphor-core";

const WEIGHTS = Object.keys(FONT_FAMILY) as Weight[];

describe("React web renderer", () => {
  beforeEach(() => {
    document.head.innerHTML = "";
    resetConfig();
  });

  it("renders the expected Unicode glyph for a name", async () => {
    const cp = glyphMap["user"];
    const glyph = String.fromCodePoint(cp);

    render(<Icon name="user" size={32} color="red" weight="regular" />);

    expect(screen.getByText(glyph)).toBeTruthy();

    await waitFor(() => {
      const styleEl = document.getElementById("phosphor-icons-font-face-regular");
      expect(styleEl).toBeTruthy();
      expect(styleEl?.textContent).toContain("@font-face");
      expect(styleEl?.textContent).toContain(FONT_FAMILY.regular);
      expect(styleEl?.textContent).not.toContain(FONT_FAMILY.bold);
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

  it("injects a font-face only for weights that are rendered", async () => {
    render(
      <>
        <Icon name="user" weight="regular" />
        <Icon name="heart" weight="fill" />
      </>
    );

    await waitFor(() => {
      expect(document.getElementById("phosphor-icons-font-face-regular")).toBeTruthy();
      expect(document.getElementById("phosphor-icons-font-face-fill")).toBeTruthy();
      expect(document.getElementById("phosphor-icons-font-face-bold")).toBeNull();
    });
  });

  it("returns null for an invalid icon name", () => {
    const { container } = render(<Icon name={"not-real" as any} weight="regular" />);
    expect(container.querySelector("span")).toBeNull();
  });

  it("configure({ weights: ['regular'] }) only injects Regular.ttf", async () => {
    configure({ weights: ["regular"] });

    render(
      <>
        <Icon name="user" weight="regular" />
        <Icon name="heart" weight="bold" />
      </>
    );

    const cp = glyphMap["heart"];
    const glyph = String.fromCodePoint(cp);
    const span = screen.getByText(glyph) as HTMLSpanElement;
    expect(span.style.fontFamily).toBe(FONT_FAMILY.regular);

    await waitFor(() => {
      expect(document.getElementById("phosphor-icons-font-face-regular")).toBeTruthy();
      expect(document.getElementById("phosphor-icons-font-face-bold")).toBeNull();
    });
  });
});

describe("React web single-weight Icon", () => {
  beforeEach(() => {
    document.head.innerHTML = "";
    resetConfig();
  });

  const RegularIcon = createIcon({
    defaultWeight: "regular",
    fontUrls: { regular: "./fonts/Phosphor-Regular.ttf" }
  });

  it("injects only the Regular TTF", async () => {
    const cp = glyphMap["user"];
    const glyph = String.fromCodePoint(cp);

    render(<RegularIcon name="user" size={24} color="black" />);

    expect(screen.getByText(glyph)).toBeTruthy();

    await waitFor(() => {
      const styleEl = document.getElementById("phosphor-icons-font-face-regular");
      expect(styleEl?.textContent).toContain("Phosphor-Regular.ttf");
      expect(styleEl?.textContent).not.toContain("Phosphor-Bold.ttf");
      expect(styleEl?.textContent).not.toContain("Phosphor-Thin.ttf");
      expect(document.getElementById("phosphor-icons-font-face-bold")).toBeNull();
    });
  });
});
