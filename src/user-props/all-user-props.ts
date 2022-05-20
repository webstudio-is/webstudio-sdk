import { useMemo } from "react";
import { createValueContainer, useValue } from "react-nano-state";
import { ElementProps } from "..";
import type { Instance } from "../db-types";

export type AllUserProps = {
  [id: Instance["id"]]: ElementProps;
};

export const allUserPropsContainer = createValueContainer<AllUserProps>({});

export const useAllUserProps = (initialUserProps?: ElementProps[]) => {
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
