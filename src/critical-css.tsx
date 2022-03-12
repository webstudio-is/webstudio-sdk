import React from "react";
import { getCssText } from "~/stitches";

const criticalCssMarker = "__critical-css__";

export const CriticalCss = (): JSX.Element | null =>
  typeof document === "undefined" ? <>{criticalCssMarker}</> : null;

export const insertCriticalCss = (markup: string): string => {
  return markup.replace(criticalCssMarker, `<style>${getCssText()}</style>`);
};
