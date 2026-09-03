import { execSync } from "node:child_process";

function run(cmd: string) {
  execSync(cmd, { stdio: "inherit" });
}

// Updates upstream Phosphor icon SVG assets and regenerates all committed artifacts:
// - packages/phosphor-core/fonts/*.ttf
// - packages/phosphor-core/glyphMap.json
// - packages/phosphor-core/IconName.ts
async function main() {
  // Update @phosphor-icons/core to the latest published version.
  run("pnpm up @phosphor-icons/core --latest");

  // Also allow the generator to regenerate committed outputs.
  run("pnpm generate-icons");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

