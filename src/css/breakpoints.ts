import { type Breakpoint } from "../db-types";

export type BaseBreakpoint = Pick<Breakpoint, "label" | "minWidth">;

export const initialBreakpoints: Array<BaseBreakpoint> = [
  { label: "Default", minWidth: 0 },
  { label: "Mobile", minWidth: 360 },
  { label: "Tablet", minWidth: 768 },
  { label: "Laptop", minWidth: 1024 },
  { label: "Desktop", minWidth: 1280 },
];
