import * as React from "react";

// Minimal `react-native` mock for unit-testing our `<Icon />` component.
// We only need the `Text` component to capture `style` + `children`.
export function Text(props: any) {
  return React.createElement("Text", props, props.children);
}

