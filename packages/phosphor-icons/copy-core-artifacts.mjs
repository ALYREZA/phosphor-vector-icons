import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

const coreDir = path.join(repoRoot, "packages", "phosphor-core");
const targetDir = path.join(repoRoot, "packages", "phosphor-icons");

const WEIGHTS = ["thin", "light", "regular", "bold", "fill", "duotone"];
const ENTRY_BASES = ["react", "react-native", ...WEIGHTS.flatMap((w) => [w, `${w}.native`])];

function rimrafSync(p) {
  if (!fs.existsSync(p)) return;
  fs.rmSync(p, { recursive: true, force: true });
}

/**
 * tsup writes into the package root with clean:false (so sources/fonts survive).
 * Previous hashed DTS chunks must be removed each build; otherwise rollup-plugin-dts
 * reprocesses them and appends another hash segment until ENAMETOOLONG.
 */
function cleanTsupOutputs() {
  for (const base of ENTRY_BASES) {
    rimrafSync(path.join(targetDir, `${base}.js`));
    rimrafSync(path.join(targetDir, `${base}.d.ts`));
    rimrafSync(path.join(targetDir, `${base}.d.mts`));
  }

  for (const name of fs.readdirSync(targetDir)) {
    // All .d.ts/.d.mts in this package are generated (entries + shared chunks).
    if (name.endsWith(".d.ts") || name.endsWith(".d.mts")) {
      rimrafSync(path.join(targetDir, name));
    }
  }
}

cleanTsupOutputs();

rimrafSync(path.join(targetDir, "fonts"));
fs.mkdirSync(path.join(targetDir, "fonts"), { recursive: true });

// Copy fonts
for (const file of fs.readdirSync(path.join(coreDir, "fonts"))) {
  const src = path.join(coreDir, "fonts", file);
  const dst = path.join(targetDir, "fonts", file);
  fs.copyFileSync(src, dst);
}

// Copy glyph map + type union
fs.copyFileSync(path.join(coreDir, "glyphMap.json"), path.join(targetDir, "glyphMap.json"));
fs.copyFileSync(path.join(coreDir, "IconName.ts"), path.join(targetDir, "IconName.ts"));

// npm publishes from this package directory — copy docs into the tarball.
fs.copyFileSync(path.join(repoRoot, "LICENSE"), path.join(targetDir, "LICENSE"));
fs.copyFileSync(path.join(repoRoot, "README.md"), path.join(targetDir, "README.md"));

