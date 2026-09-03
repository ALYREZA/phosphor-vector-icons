import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");

const coreDir = path.join(repoRoot, "packages", "phosphor-core");
const targetDir = path.join(repoRoot, "packages", "phosphor-icons");

function rimrafSync(p) {
  if (!fs.existsSync(p)) return;
  fs.rmSync(p, { recursive: true, force: true });
}

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

