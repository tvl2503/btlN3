import { COLORS } from "./colors";
import { space, lineHeights } from "./spacing";
import { sizes } from "./sizes";
import { fonts, fontWeights, fontSizes } from "./fonts";

export const theme = {
  colors: COLORS,
  space,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};

export type ThemeCore = typeof theme;

export type ThemeInterface = {
  theme: ThemeCore;
};
