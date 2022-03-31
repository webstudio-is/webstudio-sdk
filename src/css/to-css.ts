import type { CSS } from "./css";
import type { Style, StyleProperty, StyleValue } from "../style/types";

export const toValue = (value: StyleValue): string => {
  if (value.type === "unit") {
    return value.value + (value.unit === "number" ? "" : value.unit);
  }
  return value.value;
};

/**
 * Convert a style of type Style to a CSS object that can be rendered
 * by stitches
 */
export const toCss = (style: Style): CSS => {
  const css: CSS = {};
  for (const property in style) {
    const value = style[property as StyleProperty];
    if (value === undefined) continue;
    css[property] = toValue(value);
  }
  return css;
};
