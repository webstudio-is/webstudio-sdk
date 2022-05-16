import { useMemo } from "react";
import { createValueContainer, useValue } from "react-nano-state";
import type { InstanceProps, Instance, Props } from "../db-types";

export type AllUserProps = {
  [id: Instance["id"]]: InstanceProps & { props?: any };
};

export const allUserPropsContainer = createValueContainer<AllUserProps>({});

export const useAllUserProps = (
  initialUserProps?: Array<InstanceProps & { props?: any }>
) => {
  useMemo(() => {
    if (initialUserProps === undefined) return;
    const propsMap: AllUserProps = {};
    for (const props of initialUserProps) {
      propsMap[props.instanceId] = props;
    }
    //We don't need to trigger rerender when setting the initial value
    allUserPropsContainer.value = propsMap;
  }, []);
  return useValue(allUserPropsContainer);
};
