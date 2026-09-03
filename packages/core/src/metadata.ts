import { glyphMap } from "./glyphMap";
import type { IconName } from "./types";

export type IconMetadata = {
  name: IconName;
  tags: readonly string[];
};

// Small tag aliasing to make common icons more meaningful for search/filter.
const TAG_ALIASES: Record<string, readonly string[]> = {
  user: ["person", "profile"],
  person: ["person", "profile"],
  heart: ["love", "emotion"],
  house: ["home", "building"],
};

function deriveTagsFromName(name: IconName): readonly string[] {
  const parts = name.split("-").filter(Boolean);
  const out: string[] = [];
  const seen = new Set<string>();

  for (const part of parts) {
    const aliases = TAG_ALIASES[part] ?? [part];
    for (const a of aliases) {
      if (seen.has(a)) continue;
      seen.add(a);
      out.push(a);
    }
  }

  // Keep tags compact so consumers can use them for filters without extra work.
  return out.slice(0, 6);
}

export const iconMetadata = Object.fromEntries(
  (Object.keys(glyphMap) as IconName[]).map((name) => [
    name,
    {
      name,
      tags: deriveTagsFromName(name),
    },
  ]),
) as Record<IconName, IconMetadata>;
