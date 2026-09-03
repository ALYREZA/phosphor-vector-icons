import { describe, expect, it } from "vitest";
import * as React from "react";
import renderer, { act } from "react-test-renderer";
import { glyphMap, FONT_FAMILY } from "phosphor-core";
import type { Weight } from "phosphor-core";

const WEIGHTS = Object.keys(FONT_FAMILY) as Weight[];

describe("React Native renderer", () => {
  it("renders expected Unicode glyph and applies fontFamily", async () => {
    const { Icon } = await import("../packages/react-native/src/Icon");

    const cp = glyphMap["user"];
    const glyph = String.fromCodePoint(cp);

    let tree: renderer.ReactTestRenderer;
    act(() => {
      tree = renderer.create(<Icon name="user" size={24} color="black" weight="regular" />);
    });

    const textNode = tree!.root.findByType("Text");
    const style = (textNode.props as any).style;

    expect(style.fontFamily).toBe(FONT_FAMILY.regular);
    expect(style.fontSize).toBe(24);
    expect(style.color).toBe("black");
    expect(textNode.children).toEqual([glyph]);
  });

  it.each(WEIGHTS)("selects fontFamily for weight=%s", async (weight) => {
    const { Icon } = await import("../packages/react-native/src/Icon");

    const cp = glyphMap["user"];
    const glyph = String.fromCodePoint(cp);

    let tree: renderer.ReactTestRenderer;
    act(() => {
      tree = renderer.create(<Icon name="user" size={20} color="red" weight={weight} />);
    });

    const textNode = tree!.root.findByType("Text");
    const style = (textNode.props as any).style;

    expect(style.fontFamily).toBe(FONT_FAMILY[weight]);
    expect(style.fontSize).toBe(20);
    expect(style.color).toBe("red");
    expect(textNode.children).toEqual([glyph]);
  });

  it("returns null for an invalid icon name", async () => {
    const { Icon } = await import("../packages/react-native/src/Icon");
    let tree: renderer.ReactTestRenderer;
    act(() => {
      tree = renderer.create(<Icon name={"not-real" as any} weight="regular" />);
    });
    // If the component renders `null`, there will be no `<Text />` node.
    expect(() => tree!.root.findByType("Text")).toThrow();
  });
});
