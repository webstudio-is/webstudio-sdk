import type { InstanceProps, Instance } from "../db-types";

export type UserProp = {
  id: string;
  prop: string;
  value: string;
};

export type UserPropsUpdates = {
  treeId: InstanceProps["treeId"];
  propsId: InstanceProps["id"];
  instanceId: Instance["id"];
  updates: Array<UserProp>;
};

export type DeleteProp = {
  instanceId: Instance["id"];
  propId: UserProp["id"];
};
