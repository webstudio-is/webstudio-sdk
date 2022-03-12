import { useMemo, useState } from "react";
import { type Instance } from "~/instance";
import { useSubscribe } from "~/pubsub";
import { type UserPropsUpdates, type UserProp } from "./types";
import { useAllUserProps, type AllUserProps } from "./all-user-props";

// Mutating the original user props only for the preview
// @todo need to rewrite and avoid mutation, currently it shouldn't cause side effects
// did the mutation to avoid additional rerendering on canvas
// Canvas component data probably needs to be automatically synchronized with changes we make through
// fetch requests to the server to avoid doing it here and in more places later
const mutateAllUserProps = (
  allUserProps: AllUserProps,
  id: Instance["id"],
  update: UserProp
) => {
  const userPropsArray: Array<UserProps> =
    allUserProps.get(id) ?? allUserProps.set(id, []).get(id)!;
  const originalUserProp = userPropsArray.find(({ id }) => id === update.id);
  if (originalUserProp === undefined) {
    userPropsArray.push(update);
    return;
  }
  originalUserProp.prop = update.prop;
  originalUserProp.value = update.value;
};

type UserProps = { [prop: UserProp["prop"]]: UserProp["value"] };

/**
 * User props mapped in prop:value format,
 * up to date with props panel.
 */
export const useUserProps = (id: Instance["id"]) => {
  const [allUserProps] = useAllUserProps();
  const initialUserProps = useMemo(() => {
    const userPropsArray = allUserProps.get(id);
    if (userPropsArray === undefined) return {};
    return (userPropsArray as Array<UserProps>).reduce(
      (userProps, { prop, value }) => {
        userProps[prop] = value;
        return userProps;
      },
      {} as UserProps
    );
  }, [allUserProps, id]);
  const [userProps, setUserProps] = useState<UserProps>(initialUserProps);

  useSubscribe<"updateProps", UserPropsUpdates>(
    "updateProps",
    (userPropsUpdates) => {
      if (userPropsUpdates.instanceId !== id) return;
      const nextProps = { ...userProps };
      for (const update of userPropsUpdates.updates) {
        nextProps[update.prop] = update.value;
        mutateAllUserProps(allUserProps, id, update);
      }
      setUserProps(nextProps);
    }
  );
  return userProps;
};
