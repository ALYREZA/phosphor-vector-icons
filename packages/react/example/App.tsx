import * as React from "react";
import { Icon } from "phosphor-vector-icons";

export default function App() {
  return (
    <div style={{ padding: 24, display: "grid", gap: 16 }}>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Icon name="user" size={32} weight="regular" color="red" />
        <span>user / regular</span>
      </div>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Icon name="user" size={32} weight="bold" color="green" />
        <span>user / bold</span>
      </div>

      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Icon name="user" size={32} weight="fill" color="blue" />
        <span>user / fill</span>
      </div>

      {/* Invalid icon name should render nothing (no crash). */}
      <div style={{ opacity: 0.7 }}>
        <Icon name={"not-real" as any} size={32} weight="regular" color="black" />
        <span>invalid icon name => should not render a glyph</span>
      </div>
    </div>
  );
}

