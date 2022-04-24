import type { CSS } from "./css";
import {
  type StyleProperty,
  type StyleValue,
  type CssRule,
  defaultBreakpoint,
} from "../css";
import type { Breakpoint } from "../db-types";

export const toValue = (value: StyleValue): string => {
  if (value.type === "unit") {
    return value.value + (value.unit === "number" ? "" : value.unit);
  }
  return value.value;
};

/**
 * Convert instance cssRules to a stitches CSS object.
 */
export const toCss = (
  cssRules: Array<CssRule>,
  breakpoints: Array<Breakpoint>
): CSS => {
  const css: CSS = {};

  const breakpointsMap: Record<Breakpoint["ref"], number> = {};
  for (const breakpoint of breakpoints) {
    breakpointsMap[breakpoint.ref] = breakpoint.minWidth;
  }

  const sortedCssRules = [...cssRules].sort((ruleA, ruleB) => {
    // If a rule references a breakpoint that was not found in breakpoints,
    // we must have removed the breakpoint and now we fall back to the defult breakpoint.
    const maxWidthA = breakpointsMap[ruleA.breakpoint] ?? 0;
    const maxWidthB = breakpointsMap[ruleB.breakpoint] ?? 0;
    return maxWidthA - maxWidthB;
  });

  for (const cssRule of sortedCssRules) {
    const style: CSS = {};
    for (const property in cssRule.style) {
      const value = cssRule.style[property as StyleProperty];
      if (value === undefined) continue;
      style[property] = toValue(value);
    }

    const ref =
      cssRule.breakpoint in breakpointsMap
        ? cssRule.breakpoint
        : defaultBreakpoint.ref;
    css["@" + ref] = style;
  }
  return css;
};
