import { useMemo, useState } from "react";
import { type Instance } from "../instance";
import { useSubscribe } from "../pubsub";
import { type UserPropsUpdates, type UserProp } from "./types";
import { useAllUserProps, type AllUserProps } from "./all-user-props";
import produce from "immer";

const mutateAllUserProps = (
  allUserProps: AllUserProps,
  { instanceId, propsId, treeId, updates }: UserPropsUpdates
) => {
  if (instanceId in allUserProps === false) {
    allUserProps[instanceId] = {
      id: propsId,
      instanceId,
      treeId,
      props: [],
    };
  }
  const instanceProps = allUserProps[instanceId];
  for (const update of updates) {
    const prop = instanceProps.props.find(({ id }) => id === update.id);
    if (prop === undefined) {
      instanceProps.props.push(update);
    } else {
      prop.prop = update.prop;
      prop.value = update.value;
    }
  }
};

type UserProps = { [prop: UserProp["prop"]]: UserProp["value"] };

/**
 * User props mapped in prop:value format,
 * up to date with props panel.
 */
export const useUserProps = (instanceId: Instance["id"]) => {
  const [allUserProps, setAllUserProps] = useAllUserProps();
  const initialUserProps = useMemo(() => {
    const userProps = allUserProps[instanceId];
    if (userProps === undefined) return {};
    return (userProps.props as Array<UserProps>).reduce(
      (userProps, { prop, value }) => {
        userProps[prop] = value;
        return userProps;
      },
      {} as UserProps
    );
  }, [instanceId]);
  const [userProps, setUserProps] = useState<UserProps>(initialUserProps);

  useSubscribe<"updateProps", UserPropsUpdates>(
    "updateProps",
    (userPropsUpdates) => {
      if (userPropsUpdates.instanceId !== instanceId) return;
      const nextProps = { ...userProps };
      for (const update of userPropsUpdates.updates) {
        nextProps[update.prop] = update.value;
      }

      const updatedAllUserProps = produce((draft: AllUserProps) => {
        mutateAllUserProps(draft, userPropsUpdates);
      })(allUserProps);

      setAllUserProps(updatedAllUserProps);
      setUserProps(nextProps);
    }
  );
  return userProps;
};
