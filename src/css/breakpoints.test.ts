import { sort, initialBreakpoints, type BaseBreakpoint } from "./breakpoints";

describe("Breakpoints", () => {
  test("sort initial breakpoints", () => {
    expect(sort(initialBreakpoints)).toStrictEqual(initialBreakpoints);
  });

  test("sort custom breakpoints", () => {
    const breakpoints = [
      { label: "0", minWidth: 0 },
      { label: "3", minWidth: 3 },
      { label: "2", minWidth: 2 },
    ];
    const sortedBreakpoints = [
      { label: "3", minWidth: 3 },
      { label: "2", minWidth: 2 },
      { label: "0", minWidth: 0 },
    ];
    expect(sort<BaseBreakpoint>(breakpoints)).toStrictEqual(sortedBreakpoints);
  });
});
