import { createTheme } from "@mui/material/styles";

export const color = {
  // Palette
  primary: "#FF4785", // Coral
  secondary: "#1EA7FD", // Ocean
  tertiary: "#DDDDDD", // Light grey

  orange: "#FC521F",
  gold: "#FFAE00",
  green: "#66BF3C",
  seafoam: "#37D5D3",
  purple: "#6F2CAC",
  ultraviolet: "#2A0481",
  red: "#d32f2f",

  // Calm
  blueLighter: "#E3F3FF", // rgba($color.blue, 12%)
  blueLight: "#F3FAFF", // rgba($color.blue, 6%)

  // Monochrome
  lightest: "#FFFFFF",
  lighter: "#F8F8F8",
  light: "#F3F3F3",
  mediumlight: "#EEEEEE",
  medium: "#DDDDDD",
  mediumdark: "#999999",
  dark: "#666666",
  darker: "#444444",
  darkest: "#333333",

  border: "rgba(0,0,0,.1)",

  // Status
  positive: "#448028", // Evergreen
  negative: "#D43900", // Crimson
  warning: "#A15C20", // Burnt sienna
  selected: "#0271B6", // Navy
};

export const theme = createTheme({});
