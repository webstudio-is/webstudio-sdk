export type { InstanceProps, Project, User } from "../generated/prisma-client";
import type { Instance } from "./instance";
export type Tree = {
  id: string;
  root: Instance;
};
