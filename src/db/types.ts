import type {
  InstanceProps as DbInstanceProps,
  Project,
  User,
  Breakpoints,
} from "@prisma/client";
import { UserProp } from "../user-props";
import type { Instance } from "./instance";
import { z } from "zod";

export type Tree = {
  id: string;
  root: Instance;
};

export type InstanceProps = Omit<DbInstanceProps, "props"> & {
  props: UserProp[];
};

export type { DbInstanceProps, Project, User, Breakpoints };
