import { defineConfig } from "tsup";

export default defineConfig({
  entry: {
    react: "./react.tsx",
    "react-native": "./react-native.tsx"
  },
  format: ["esm"],
  tsconfig: "./tsconfig.build.json",
  dts: {
    resolve: true
  },
  outDir: ".",
  // outDir is the package root; do not wipe sources/fonts.
  clean: false,
  splitting: false,
  external: ["react", "react-native"],
  noExternal: [
    "phosphor-core",
    "phosphor-icons-react",
    "phosphor-icons-react-native"
  ],
  treeshake: true,
  esbuildOptions(options) {
    // Keep code size small; no need for test helpers.
    options.sourcemap = false;
  }
});

