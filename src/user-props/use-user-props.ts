import { useMemo, useState } from "react";
import { type Instance } from "../instance";
import { useSubscribe } from "../pubsub";
import { type UserPropsUpdates, type UserProp } from "./types";
import { useAllUserProps, type AllUserProps } from "./all-user-props";
import { type InstanceProps } from "../db-types";

// Mutating the original user props only for the preview
// @todo need to rewrite and avoid mutation, currently it shouldn't cause side effects
// This is done to avoid additional rerendering on canvas
// Preview canvas component data probably needs to be automatically synchronized with changes we make through
// fetch requests to the server to avoid doing it here and in more places later
const mutateAllUserProps = (
  allUserProps: AllUserProps,
  {
    instanceId,
    propsId,
    treeId,
  }: {
    instanceId: Instance["id"];
    propsId: InstanceProps["id"];
    treeId: InstanceProps["treeId"];
  },
  update: UserProp
) => {
  if (allUserProps.has(instanceId) === false) {
    allUserProps.set(instanceId, {
      id: propsId,
      instanceId,
      treeId,
      props: [],
    });
  }
  const instanceProps = allUserProps.get(instanceId)!;
  const prop = instanceProps.props.find(({ id }) => id === update.id);
  if (prop === undefined) {
    instanceProps.props.push(update);
  } else {
    prop.prop = update.prop;
    prop.value = update.value;
  }
};

type UserProps = { [prop: UserProp["prop"]]: UserProp["value"] };

/**
 * User props mapped in prop:value format,
 * up to date with props panel.
 */
export const useUserProps = (instanceId: Instance["id"]) => {
  const [allUserProps] = useAllUserProps();
  const initialUserProps = useMemo(() => {
    const userProps = allUserProps.get(instanceId);
    if (userProps === undefined) return {};
    return (userProps.props as Array<UserProps>).reduce(
      (userProps, { prop, value }) => {
        userProps[prop] = value;
        return userProps;
      },
      {} as UserProps
    );
  }, [allUserProps, instanceId]);
  const [userProps, setUserProps] = useState<UserProps>(initialUserProps);

  useSubscribe<"updateProps", UserPropsUpdates>(
    "updateProps",
    (userPropsUpdates) => {
      if (userPropsUpdates.instanceId !== instanceId) return;
      const nextProps = { ...userProps };
      for (const update of userPropsUpdates.updates) {
        nextProps[update.prop] = update.value;
        mutateAllUserProps(
          allUserProps,
          {
            treeId: userPropsUpdates.treeId,
            propsId: userPropsUpdates.propsId,
            instanceId,
          },
          update
        );
      }
      setUserProps(nextProps);
    }
  );
  return userProps;
};
