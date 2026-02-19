import { StyleSheet } from "react-native";

export const COLORS = {
  background: "#000",
  surface: "#0a0a0a",
  white: "#ffffff",
  gray: "#BFBFBF",

 primaryStart: "#6A00F4",
primaryEnd: "#C77DFF"
};

export const SIZES = {
  padding: 20,
  radius: 30,
  title: 42,
  subtitle: 14,
};

export const GLOBAL = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  center: {
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: SIZES.title,
    color: COLORS.white,
    fontWeight: "600",
    lineHeight: 48,
  },

  subtitle: {
    fontSize: SIZES.subtitle,
    color: COLORS.gray,
    textAlign: "center",
    marginTop: 15,
    paddingHorizontal: 25,
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
  }
});