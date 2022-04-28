import { type Breakpoint } from "../db-types";

export type BaseBreakpoint = Pick<Breakpoint, "label" | "minWidth">;

export const initialBreakpoints: Array<BaseBreakpoint> = [
  { label: "Desktop", minWidth: 1280 },
  { label: "Laptop", minWidth: 1024 },
  { label: "Tablet", minWidth: 768 },
  { label: "Mobile", minWidth: 360 },
  { label: "Default", minWidth: 0 },
];
