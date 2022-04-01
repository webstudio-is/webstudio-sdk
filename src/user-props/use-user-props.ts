import { useEffect, useMemo, useState } from "react";
import { type Instance } from "../instance";
import { useSubscribe } from "../pubsub";
import { type UserPropsUpdates, type UserProp } from "./types";
import { useAllUserProps, type AllUserProps } from "./all-user-props";
import produce from "immer";

type UserProps = { [prop: UserProp["prop"]]: UserProp["value"] };

/**
 * User props mapped in prop:value format,
 * up to date with props panel.
 */
export const useUserProps = (instanceId: Instance["id"]) => {
  const [allUserProps, setAllUserProps] = useAllUserProps();
  const propsData = allUserProps[instanceId];

  const initialUserProps = useMemo(() => {
    if (propsData === undefined) return {};
    return (propsData.props as Array<UserProps>).reduce(
      (props, { prop, value }) => {
        props[prop] = value;
        return props;
      },
      {} as UserProps
    );
  }, [propsData]);

  const [props, setProps] = useState<UserProps>(initialUserProps);

  useEffect(() => {
    if (propsData == undefined) return;
    const nextProps: UserProps = {};
    for (const prop of propsData.props) {
      nextProps[prop.prop] = prop.value;
    }
    setProps(nextProps);
  }, [propsData]);

  return props;
};
