import type {
  InstanceProps as DbInstanceProps,
  Project,
  User,
  Breakpoints,
} from "@prisma/client";
import type { CssRule } from "./css";
import * as components from "./components";

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

type Props = {
  id: string;
  prop: string;
  value: string;
};

type InstanceProps = Omit<DbInstanceProps, "props"> & {
  props: Props[];
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
  Props,
};
