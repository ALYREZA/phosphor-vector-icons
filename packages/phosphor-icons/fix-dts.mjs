import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));

const extraDecls = `
declare const FONT_FILE: {
    readonly thin: "Phosphor-Thin.ttf";
    readonly light: "Phosphor-Light.ttf";
    readonly regular: "Phosphor-Regular.ttf";
    readonly bold: "Phosphor-Bold.ttf";
    readonly fill: "Phosphor-Fill.ttf";
    readonly duotone: "Phosphor-Duotone.ttf";
};
type PhosphorIconsConfig = {
    weights?: readonly Weight[];
};
declare function configure(config: PhosphorIconsConfig): void;
`;

const exportLine =
  "export { FONT_FAMILY, FONT_FILE, Icon, configure, type IconProps, type PhosphorIconsConfig, type Weight };\n";

for (const file of ["react.d.ts", "react-native.d.ts"]) {
  const target = path.join(dir, file);
  let text = fs.readFileSync(target, "utf8");

  if (!text.includes("declare function configure")) {
    text = text.replace(
      "declare function Icon",
      `${extraDecls}\ndeclare function Icon`
    );
  }

  text = text.replace(
    /export \{[^}]+\};?\s*$/,
    exportLine.trimEnd() + "\n"
  );

  fs.writeFileSync(target, text);
}
