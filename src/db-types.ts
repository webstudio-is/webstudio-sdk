export type { InstanceProps, Project } from "../generated/prisma-client";
import type { Instance } from "./instance";
export type Tree = {
  id: string;
  root: Instance;
};
