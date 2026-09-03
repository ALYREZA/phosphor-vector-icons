import { describe, expect, it } from "vitest";
import fs from "node:fs";
import path from "node:path";
import { FONT_FILE } from "../packages/phosphor-core/src/fontFiles";
import { WEIGHTS } from "../packages/phosphor-core/src/fonts";

const packageDir = path.resolve(__dirname, "../packages/phosphor-icons");
const allFontFiles = Object.values(FONT_FILE);

describe("single-weight package entries", () => {
  it.each(WEIGHTS)("source for %s references only that TTF", (weight) => {
    const source = fs.readFileSync(path.join(packageDir, `${weight}.tsx`), "utf8");
    const ownFile = FONT_FILE[weight];

    expect(source).toContain(ownFile);
    for (const file of allFontFiles) {
      if (file === ownFile) continue;
      expect(source).not.toContain(file);
    }
  });

  it.each(WEIGHTS)("built %s.js (if present) does not reference other TTFs", (weight) => {
    const builtPath = path.join(packageDir, `${weight}.js`);
    if (!fs.existsSync(builtPath)) return;

    const built = fs.readFileSync(builtPath, "utf8");
    const ownFile = FONT_FILE[weight];

    expect(built).toContain(ownFile);
    for (const file of allFontFiles) {
      if (file === ownFile) continue;
      expect(built).not.toContain(file);
    }
  });
});
