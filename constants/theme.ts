import { Platform } from "react-native";

/* ========= CORE BRAND COLORS ========= */

const primaryRed = "#E50914";      // main accent (matches UI glow)
const gradientStart = "#FF2D55";   // card gradient top
const gradientEnd = "#FF7A18";     // card gradient bottom
const darkBg = "#0B0B0D";          // app background
const surface = "#151518";         // cards / panels
const glass = "rgba(255,255,255,0.06)";
const border = "rgba(255,255,255,0.12)";

/* ========= THEME ========= */

export const Colors = {
  dark: {
    /* text */
    textPrimary: "#FFFFFF",
    textSecondary: "#B8B8C2",
    textMuted: "#6E6E78",

    /* layout */
    background: darkBg,
    surface: surface,
    glass: glass,
    border: border,

    /* accents */
    primary: primaryRed,
    gradientStart,
    gradientEnd,

    /* icons */
    iconActive: "#FFFFFF",
    iconInactive: "#7A7A85",

    /* buttons */
    like: "#FF375F",
    dislike: "#3A3A40",
    message: "#8E8E93",
  },

  light: {
    textPrimary: "#0B0B0D",
    textSecondary: "#555",
    textMuted: "#888",

    background: "#F6F6F8",
    surface: "#FFFFFF",
    glass: "rgba(0,0,0,0.04)",
    border: "rgba(0,0,0,0.08)",

    primary: primaryRed,
    gradientStart,
    gradientEnd,

    iconActive: "#000",
    iconInactive: "#999",

    like: "#FF375F",
    dislike: "#DDD",
    message: "#AAA",
  }
};
export const Fonts = Platform.select({
  ios: {
    sans: "SF Pro Display",
    body: "SF Pro Text",
    rounded: "SF Pro Rounded",
    mono: "SFMono-Regular",
  },

  android: {
    sans: "Roboto",
    body: "Roboto",
    rounded: "sans-serif-medium",
    mono: "monospace",
  },

  web: {
    sans: "Inter, system-ui, sans-serif",
    body: "Inter, system-ui, sans-serif",
    rounded: "Nunito, sans-serif",
    mono: "JetBrains Mono, monospace",
  },

  default: {
    sans: "System",
    body: "System",
    rounded: "System",
    mono: "monospace",
  },
});
export const UI = {
  radius: {
    sm: 10,
    md: 18,
    lg: 28,
    pill: 999,
  },

  shadow: {
    card: {
      shadowColor: "#000",
      shadowOpacity: 0.4,
      shadowRadius: 20,
      elevation: 20,
    },
  },

  blur: {
    glass: 40,
  },
};