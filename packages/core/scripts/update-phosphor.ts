import { execSync } from "node:child_process";

function run(cmd: string) {
  execSync(cmd, { stdio: "inherit" });
}

async function main() {
  // 1) Update upstream Phosphor icon assets.
  run("pnpm up @phosphor-icons/core --latest");

  // 2) Regenerate committed artifacts in this package.
  run("pnpm --filter @phosphor-icons/core-foundation generate");
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});

