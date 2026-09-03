import { describe, expect, it } from "vitest";
import fs from "node:fs/promises";
import os from "node:os";
import path from "node:path";

import { glyphMap } from "../../packages/core/src/glyphMap";
import { iconNames } from "../../packages/core/src/types";
import { iconMetadata } from "../../packages/core/src/metadata";
import { generateCodeArtifacts, validateGlyphMap } from "../../packages/core/scripts/generate";

describe("@phosphor-icons/core-foundation - core data", () => {
  it("glyphMap contains known icons", () => {
    expect(typeof (glyphMap as any).user).toBe("number");
    expect(typeof (glyphMap as any).heart).toBe("number");
    expect(typeof (glyphMap as any).house).toBe("number");
  });

  it("glyphMap returns undefined for invalid icon names", () => {
    expect((glyphMap as any)["this-icon-does-not-exist"]).toBeUndefined();
  });

  it("iconNames matches glyphMap keys", () => {
    const keys = Object.keys(glyphMap).sort((a, b) => a.localeCompare(b));
    const names = [...iconNames].sort((a, b) => a.localeCompare(b));
    expect(names).toEqual(keys);
  });

  it("iconMetadata has extensible shape", () => {
    expect(iconMetadata.user.name).toBe("user");
    expect(Array.isArray(iconMetadata.user.tags)).toBe(true);
  });
});

describe("@phosphor-icons/core-foundation - generator", () => {
  it("invalid glyphMap codepoints are detected", () => {
    expect(() => validateGlyphMap({ ok: 1, bad: Number.NaN })).toThrow(/Invalid codepoint/);
  });

  it("generateCodeArtifacts writes expected files", async () => {
    const tmpRoot = await fs.mkdtemp(path.join(os.tmpdir(), "phosphor-core-foundation-"));
    const srcDir = path.join(tmpRoot, "src");
    const glyphMapJsonPath = path.join(tmpRoot, "glyphMap.json");

    await generateCodeArtifacts(glyphMap as Record<string, number>, {
      outSrcDir: srcDir,
      outGlyphMapJsonPath: glyphMapJsonPath,
    });

    const glyphMapTs = path.join(srcDir, "glyphMap.ts");
    const typesTs = path.join(srcDir, "types.ts");
    const metadataTs = path.join(srcDir, "metadata.ts");

    const [glyphMapTsText, typesTsText, metadataTsText] = await Promise.all([
      fs.readFile(glyphMapTs, "utf-8"),
      fs.readFile(typesTs, "utf-8"),
      fs.readFile(metadataTs, "utf-8"),
    ]);

    expect(glyphMapTsText).toContain("export const glyphMap");
    expect(typesTsText).toContain("export type IconName");
    expect(metadataTsText).toContain("export const iconMetadata");
  });
});

