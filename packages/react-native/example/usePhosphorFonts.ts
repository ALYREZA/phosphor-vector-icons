import * as Font from "expo-font";

export function usePhosphorFonts() {
  // `Icon` uses FONT_FAMILY names like "Phosphor-Regular".
  // These must be registered for React Native so the glyphs appear.
  return Font.useFonts({
    "Phosphor-Thin": require("phosphor-vector-icons/fonts/Phosphor-Thin.ttf"),
    "Phosphor-Light": require("phosphor-vector-icons/fonts/Phosphor-Light.ttf"),
    "Phosphor-Regular": require("phosphor-vector-icons/fonts/Phosphor-Regular.ttf"),
    "Phosphor-Bold": require("phosphor-vector-icons/fonts/Phosphor-Bold.ttf"),
    "Phosphor-Fill": require("phosphor-vector-icons/fonts/Phosphor-Fill.ttf"),
    "Phosphor-Duotone": require("phosphor-vector-icons/fonts/Phosphor-Duotone.ttf")
  });
}
