import { WEIGHTS, type Weight } from "./fonts";

export type PhosphorIconsConfig = {
  /**
   * Weights the component may use at runtime. Defaults to all weights.
   * `{ weights: ["regular"] }` resolves every `weight` prop to Regular.
   * Import `phosphor-vector-icons/regular` to include only Regular.ttf in the bundle.
   */
  weights?: readonly Weight[];
};

let configuredWeights: readonly Weight[] = WEIGHTS;

export function configure(config: PhosphorIconsConfig): void {
  if (!config.weights || config.weights.length === 0) {
    configuredWeights = WEIGHTS;
    return;
  }

  const unique: Weight[] = [];
  for (const weight of config.weights) {
    if (!WEIGHTS.includes(weight)) continue;
    if (unique.includes(weight)) continue;
    unique.push(weight);
  }

  configuredWeights = unique.length > 0 ? unique : WEIGHTS;
}

export function getConfiguredWeights(): readonly Weight[] {
  return configuredWeights;
}

export function resolveWeight<W extends Weight>(requested: W, available: readonly W[]): W {
  const configured = getConfiguredWeights();
  const usable = available.filter((weight) => configured.includes(weight));
  const pool = usable.length > 0 ? usable : available;

  if (pool.includes(requested)) return requested;
  if ((pool as readonly Weight[]).includes("regular")) return "regular" as W;
  return pool[0];
}

export function resetConfig(): void {
  configuredWeights = WEIGHTS;
}
