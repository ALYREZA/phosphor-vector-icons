import { defineConfig } from "tsup";

const WEIGHTS = ["thin", "light", "regular", "bold", "fill", "duotone"] as const;

const weightEntries = Object.fromEntries(
  WEIGHTS.flatMap((weight) => [
    [weight, `./${weight}.tsx`],
    [`${weight}.native`, `./${weight}.native.tsx`]
  ])
);

export default defineConfig({
  entry: {
    react: "./react.tsx",
    "react-native": "./react-native.tsx",
    ...weightEntries
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
    "phosphor-core/font-urls",
    "phosphor-icons-react",
    "phosphor-icons-react/createIcon",
    "phosphor-icons-react-native",
    "phosphor-icons-react-native/createIcon"
  ],
  treeshake: true,
  esbuildOptions(options) {
    // Keep code size small; no need for test helpers.
    options.sourcemap = false;
  }
});
