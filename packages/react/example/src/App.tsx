import type { Weight } from "phosphor-vector-icons";
import { Icon } from "phosphor-vector-icons";

const WEIGHTS: Array<{ weight: Weight; color: string }> = [
  { weight: "thin", color: "#64748b" },
  { weight: "light", color: "#0ea5e9" },
  { weight: "regular", color: "#ef4444" },
  { weight: "bold", color: "#22c55e" },
  { weight: "fill", color: "#3b82f6" },
  { weight: "duotone", color: "#a855f7" }
];

export default function App() {
  return (
    <div style={{ padding: 24, display: "grid", gap: 16, fontFamily: "system-ui, sans-serif" }}>
      <h1 style={{ margin: 0, fontSize: 20 }}>phosphor-vector-icons — React</h1>

      {WEIGHTS.map(({ weight, color }) => (
        <div key={weight} style={{ display: "flex", gap: 12, alignItems: "center" }}>
          <Icon name="user" size={32} weight={weight} color={color} />
          <span>user / {weight}</span>
        </div>
      ))}

      <div style={{ opacity: 0.7 }}>
        <Icon name={"not-real" as any} size={32} weight="regular" color="black" />
        <span>invalid icon name → should not render a glyph</span>
      </div>
    </div>
  );
}
