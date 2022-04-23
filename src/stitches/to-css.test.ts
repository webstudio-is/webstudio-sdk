import { type CssRule, type Breakpoint, initialBreakpoints } from "../css";
import { toCss } from "./to-css";

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
    const breakpoints: Array<Breakpoint> = [];
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

    const stitchesCss = toCss(cssRules, initialBreakpoints);
    expect(Object.keys(stitchesCss)).toStrictEqual([
      "@default",
      "@tablet",
      "@desktop",
    ]);
  });
});
