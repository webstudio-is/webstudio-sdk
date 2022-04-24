import type { Breakpoint } from "../db-types";
import { type CssRule, initialBreakpoints } from "../css";
import { toCss } from "./to-css";

const breakpoints: Array<Breakpoint> = initialBreakpoints.map((breakpoint) => ({
  ...breakpoint,
  id: "000",
  projectId: "111",
}));

describe("Convert WS CSS rules to stitches", () => {
  test("basic", () => {
    const cssRules: Array<CssRule> = [
      {
        style: {
          color: {
            type: "keyword",
            value: "red",
          },
        },
        breakpoint: "default",
      },
    ];
    const stitchesCss = toCss(cssRules, breakpoints);
    expect(stitchesCss).toEqual({
      "@default": {
        color: "red",
      },
    });
  });

  test("sort order based on maxWidth in breakpoints", () => {
    const cssRules: Array<CssRule> = [
      {
        style: {
          color: {
            type: "keyword",
            value: "green",
          },
        },
        breakpoint: "tablet",
      },

      {
        style: {
          color: {
            type: "keyword",
            value: "blue",
          },
        },
        breakpoint: "desktop",
      },
      {
        style: {
          color: {
            type: "keyword",
            value: "red",
          },
        },
        breakpoint: "default",
      },
    ];

    const stitchesCss = toCss(cssRules, breakpoints);
    expect(Object.keys(stitchesCss)).toStrictEqual([
      "@default",
      "@tablet",
      "@desktop",
    ]);
  });
});
