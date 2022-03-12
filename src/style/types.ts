import { units } from "./units";
import { properties } from "./properties";

type Properties = typeof properties;

export type StyleProperty = keyof Properties;

export type AppliesTo = Properties[StyleProperty]["appliesTo"];

export type Style = {
  [property in StyleProperty]?: StyleValue;
};

export type Unit = typeof units[number] | "number";

type UnitValue = {
  type: "unit";
  unit: Unit;
  value: number;
};

type KeywordValue = {
  type: "keyword";
  // @todo use exact type
  value: string;
};

// We want to be able to render the invalid value
// and show it is invalid visually, without saving it to the db
type InvalidValue = {
  type: "invalid";
  value: string;
};

export type StyleValue = UnitValue | KeywordValue | InvalidValue;
