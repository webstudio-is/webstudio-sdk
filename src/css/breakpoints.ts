import { type DbBreakpoint } from "../db-types";

export type Breakpoint = Pick<DbBreakpoint, "label" | "ref" | "minWidth">;

export const defaultBreakpoint: Breakpoint = {
  label: "Default",
  ref: "default",
  minWidth: 0,
};

export const initialBreakpoints: Array<Breakpoint> = [
  { label: "Desktop", minWidth: 1280, ref: "desktop" },
  { label: "Laptop", minWidth: 1024, ref: "laptop" },
  { label: "Tablet", minWidth: 768, ref: "tablet" },
  { label: "Mobile", minWidth: 360, ref: "mobile" },
  defaultBreakpoint,
];
