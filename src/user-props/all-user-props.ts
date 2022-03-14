import { useMemo } from "react";
import { createValueContainer, useValue } from "react-nano-state";
import { type Instance } from "../instance";
import type { InstanceProps } from "../db-types";

export type AllUserProps = Map<Instance["id"], InstanceProps>;
const allUserPropsContainer = createValueContainer<AllUserProps>(new Map());
export const useAllUserProps = (initialUserProps?: Array<InstanceProps>) => {
  useMemo(() => {
    if (initialUserProps === undefined) return;
    const propsMap = new Map();
    for (const props of initialUserProps) {
      propsMap.set(props.instanceId, props);
    }
    //We don't need to trigger rerender when setting the initial value
    allUserPropsContainer.value = propsMap;
  }, [initialUserProps]);
  return useValue(allUserPropsContainer);
};
