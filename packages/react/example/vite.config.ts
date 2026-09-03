import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const exampleRoot = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(exampleRoot, "../../..");

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ["phosphor-vector-icons"]
  },
  server: {
    fs: {
      allow: [repoRoot]
    }
  }
});
