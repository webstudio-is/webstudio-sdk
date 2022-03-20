import type { CSS } from "./css";
import type { Style, StyleProperty } from "../style/types";

/**
 * Convert a style of type Style to a CSS object that can be rendered
 * by stitches
 */
export const buildCss = (style: Style): CSS => {
  const css: CSS = {};
  for (const property in style) {
    const value = style[property as StyleProperty];
    if (value === undefined) continue;
    if (value.type === "unit") {
      css[property] = value.value + (value.unit === "number" ? "" : value.unit);
    } else {
      css[property] = value.value;
    }
  }
  return css;
};
