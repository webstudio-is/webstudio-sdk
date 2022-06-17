import type {
  InstanceProps as DbInstanceProps,
  Project,
  User,
  Breakpoints,
} from "@prisma/client";
import type { CssRule } from "./css";
import * as components from "./components";
import { UserProp } from "./user-props";

type Instance = {
  id: string;
  component: keyof typeof components;
  children: Array<Instance | string>;
  cssRules: Array<CssRule>;
};

type Tree = {
  id: string;
  root: Instance;
};

type Breakpoint = {
  id: string;
  label: string;
  minWidth: number;
};

type InstanceProps = Omit<DbInstanceProps, "props"> & {
  props: UserProp[];
};

export type {
  InstanceProps,
  DbInstanceProps,
  Project,
  User,
  Instance,
  Tree,
  Breakpoints,
  Breakpoint,
};
