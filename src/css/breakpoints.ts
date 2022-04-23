import { type DbBreakpoint } from "../db-types";

export type Breakpoint = Pick<DbBreakpoint, "label" | "ref" | "minWidth">;

export const defaultBreakpoint: Breakpoint = {
  label: "Default",
  ref: "default",
  minWidth: 0,
};

export const initialBreakpoints: Array<Breakpoint> = [
  { label: "Desktop Large", minWidth: 1200, ref: "desktop-large" },
  { label: "Desktop", minWidth: 992, ref: "desktop" },
  { label: "Tablet", minWidth: 768, ref: "tablet" },
  { label: "Mobile", minWidth: 360, ref: "mobile" },
  defaultBreakpoint,
];
