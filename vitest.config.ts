import { defineConfig } from "vitest/config";
import path from "node:path";

const repoRoot = path.resolve(__dirname);

export default defineConfig({
  test: {
    globals: true,
    environment: "node",
    include: ["tests/**/*.test.*"]
  },
  resolve: {
    alias: {
      // Let tests import from TS source even though `phosphor-core` is build-time only.
      "phosphor-core": path.join(repoRoot, "packages", "phosphor-core", "src", "index.ts"),
      // `react-native` contains Flow syntax that Vite/Rolldown can't parse.
      // For our unit tests we only need to observe what props we pass to `Text`.
      "react-native": path.join(repoRoot, "tests", "mocks", "react-native.ts"),
    }
  }
});

