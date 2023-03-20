import { DefaultTheme } from "styled-components";

export type ColorsTypes = typeof colors;
export type FontSizeTypes = typeof fontSizes;

const colors = {
  black: "#000",
  white: "fff",
};

const fontSizes = {
  xs: "11px",
  sm: "12px",
  base: "14px",
  lg: "15px",
  xl: "16px",
};

const theme: DefaultTheme = {
  colors,
  fontSizes,
};

export default theme;
