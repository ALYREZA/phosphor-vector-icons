import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    react: "./react.tsx",
    "react-native": "./react-native.tsx"
  },
  format: ["esm"],
  dts: true,
  outDir: ".",
  clean: true,
  splitting: false,
  external: ["react", "react-native"],
  treeshake: true,
  esbuildOptions(options) {
    // Keep code size small; no need for test helpers.
    options.sourcemap = false;
  }
});

