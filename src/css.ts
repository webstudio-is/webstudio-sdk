import { createStitches } from "@stitches/react";
import type * as Stitches from "@stitches/react";
export type { VariantProps } from "@stitches/react";

const {
  css,
  theme,
  createTheme,
  getCssText,
  globalCss,
  keyframes,
  config,
  reset,
} = createStitches({
  theme: {
    colors: {},
    fonts: {},
    space: {},
    sizes: {},
    fontSizes: {},
    radii: {},
    zIndices: {},
  },
  media: {},
  utils: {},
});

export { css, getCssText, globalCss, config };
export type CSS = Stitches.CSS<typeof config>;

export const darkTheme = createTheme("dark-theme", {
  // @todo
});
