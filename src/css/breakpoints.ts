import { type Breakpoint } from "../db-types";

export type BaseBreakpoint = Pick<Breakpoint, "label" | "minWidth">;

export const initialBreakpoints: Array<BaseBreakpoint> = [
  { label: "Desktop", minWidth: 1280 },
  { label: "Laptop", minWidth: 1024 },
  { label: "Tablet", minWidth: 768 },
  { label: "Mobile", minWidth: 360 },
  { label: "Default", minWidth: 0 },
];

/**
 * Sort by minWidth descending.
 * We want media querries with bigger minWidth to override the smaller once.
 */
export const sort = <Object extends { minWidth: number }>(
  breakpoints: Array<Object>
) => {
  return [...breakpoints].sort((breakpointA, breakpointB) => {
    return breakpointB.minWidth - breakpointA.minWidth;
  });
};
