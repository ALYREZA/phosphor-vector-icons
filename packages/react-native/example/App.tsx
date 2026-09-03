import * as React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Icon } from "phosphor-vector-icons";
import { usePhosphorFonts } from "./usePhosphorFonts";

function Row({
  title,
  children
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
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
    <View style={{ flex: 1, padding: 24 }}>
      <View style={{ marginBottom: 16 }}>
        <Row title="user / regular">
          <Icon name="user" size={48} weight="regular" color="red" />
        </Row>
      </View>

      <View style={{ marginBottom: 16 }}>
        <Row title="user / bold">
          <Icon name="user" size={48} weight="bold" color="green" />
        </Row>
      </View>

      <View style={{ marginBottom: 16 }}>
        <Row title="user / fill">
          <Icon name="user" size={48} weight="fill" color="blue" />
        </Row>
      </View>

      {/* Invalid icon name should render nothing (no crash). */}
      <View style={{ opacity: 0.7 }}>
        <Icon name={"not-real" as any} size={48} weight="regular" color="black" />
      </View>
    </View>
  );
}

