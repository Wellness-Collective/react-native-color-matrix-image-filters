import { StyleSheet, processColor } from "react-native";

// For some reason RNImageMatrixFilter draw method is not called when component's backgroundColor
// is not set or transparent
export const defaultStyle = StyleSheet.create({
  container: {
    backgroundColor: "#fff0",
  },
});

export const checkStyle = (style) => {
  if (style) {
    const { backgroundColor } = StyleSheet.flatten(style);

    if (!(processColor(backgroundColor) !== 0)) {
      throw new Error(
        `ImageFilter: Can't use '${backgroundColor}' backgroundColor,` +
          " consider using '#fff0' instead."
      );
    }
  }
};
