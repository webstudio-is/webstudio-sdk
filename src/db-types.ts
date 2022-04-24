import type {
  InstanceProps,
  Project,
  User,
  Breakpoint,
} from "../generated/prisma-client";
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

export type { InstanceProps, Project, User, Instance, Tree, Breakpoint };
