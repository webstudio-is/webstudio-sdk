import { type Breakpoint } from "../db-types";

export type BaseBreakpoint = Pick<Breakpoint, "label" | "ref" | "minWidth">;

// This is never sent to the DB.
export const defaultBreakpoint: Breakpoint = {
  id: "0",
  projectId: "0",
  label: "Default",
  ref: "default",
  minWidth: 0,
};

export const initialBreakpoints: Array<BaseBreakpoint> = [
  { label: "Desktop", minWidth: 1280, ref: "desktop" },
  { label: "Laptop", minWidth: 1024, ref: "laptop" },
  { label: "Tablet", minWidth: 768, ref: "tablet" },
  { label: "Mobile", minWidth: 360, ref: "mobile" },
  defaultBreakpoint,
];
