import * as React from "react";
import { View, Text, ActivityIndicator, ScrollView } from "react-native";
import type { Weight } from "phosphor-vector-icons";
import { Icon } from "phosphor-vector-icons";
import { usePhosphorFonts } from "./usePhosphorFonts";

const WEIGHTS: Array<{ weight: Weight; color: string }> = [
  { weight: "thin", color: "#64748b" },
  { weight: "light", color: "#0ea5e9" },
  { weight: "regular", color: "#ef4444" },
  { weight: "bold", color: "#22c55e" },
  { weight: "fill", color: "#3b82f6" },
  { weight: "duotone", color: "#a855f7" }
];

function Row({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center", marginBottom: 16 }}>
      <View style={{ marginRight: 12 }}>{children}</View>
      <Text style={{ color: "#333" }}>{title}</Text>
    </View>
  );
}

export default function App() {
  const [fontsLoaded] = usePhosphorFonts();

  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={{ padding: 24 }}>
      <Text style={{ fontSize: 20, fontWeight: "600", marginBottom: 16 }}>
        phosphor-vector-icons — Expo
      </Text>

      {WEIGHTS.map(({ weight, color }) => (
        <Row key={weight} title={`user / ${weight}`}>
          <Icon name="user" size={48} weight={weight} color={color} />
        </Row>
      ))}

      {/* Invalid icon name should render nothing (no crash). */}
      <View style={{ opacity: 0.7 }}>
        <Icon name={"not-real" as any} size={48} weight="regular" color="black" />
        <Text style={{ color: "#666" }}>invalid icon name → no glyph</Text>
      </View>
    </ScrollView>
  );
}
