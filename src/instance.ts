import type { Style } from "~/style";
import * as components from "~/components";

export type Instance = {
  id: string;
  component: keyof typeof components;
  style: Style;
  children: Array<Instance | string>;
};
