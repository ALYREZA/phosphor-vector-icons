import { describe, expect, it } from "vitest";
import { glyphMap } from "phosphor-core";

describe("glyphMap lookup", () => {
  it("contains known icon names", () => {
    expect(typeof glyphMap["user"]).toBe("number");
    expect(typeof glyphMap["heart"]).toBe("number");
    expect(typeof glyphMap["house"]).toBe("number");
  });

  it("returns undefined for invalid icon names", () => {
    expect(glyphMap["this-icon-does-not-exist"]).toBeUndefined();
  });
});

