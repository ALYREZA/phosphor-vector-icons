import { describe, expect, it, beforeEach } from "vitest";
import {
  configure,
  getConfiguredWeights,
  resolveWeight,
  resetConfig
} from "../packages/phosphor-core/src/config";
import { FONT_FAMILY, WEIGHTS } from "../packages/phosphor-core/src/fonts";
import type { Weight } from "../packages/phosphor-core/src/fonts";

const available = Object.keys(FONT_FAMILY) as Weight[];

describe("configure()", () => {
  beforeEach(() => {
    resetConfig();
  });

  it("defaults to every weight", () => {
    expect(getConfiguredWeights()).toEqual(WEIGHTS);
  });

  it("limits resolved weights to the configured family", () => {
    configure({ weights: ["regular"] });

    expect(getConfiguredWeights()).toEqual(["regular"]);
    expect(resolveWeight("regular", available)).toBe("regular");
    expect(resolveWeight("bold", available)).toBe("regular");
    expect(resolveWeight("thin", available)).toBe("regular");
  });

  it("can enable more than one weight", () => {
    configure({ weights: ["regular", "fill"] });

    expect(resolveWeight("fill", available)).toBe("fill");
    expect(resolveWeight("regular", available)).toBe("regular");
    expect(resolveWeight("bold", available)).toBe("regular");
  });

  it("falls back to the first configured weight when regular is not included", () => {
    configure({ weights: ["thin", "bold"] });

    expect(resolveWeight("fill", available)).toBe("thin");
    expect(resolveWeight("bold", available)).toBe("bold");
  });
});
