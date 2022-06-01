import type {
  InstanceProps as DbInstanceProps,
  Project,
  User,
  Breakpoint,
} from "../generated/prisma-client";
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

type InstanceProps = Omit<DbInstanceProps, "props"> & {
  props: Array<UserProp>;
};

export type { InstanceProps, Project, User, Instance, Tree, Breakpoint };
