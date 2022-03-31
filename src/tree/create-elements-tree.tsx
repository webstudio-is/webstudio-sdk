import React from "react";
import { toCss } from "../style";
import { type Instance } from "../instance";
import { type WrapperComponentProps } from "./wrapper-component";

export type ChildrenUpdates = Array<
  | string
  // Updates an instance child
  | { id: Instance["id"]; text: string }
  // Creates a new child instance
  | {
      id: Instance["id"];
      text: string;
      component: Instance["component"];
      createInstance: true;
    }
>;

export type OnChangeChildren = (change: {
  instanceId: Instance["id"];
  updates: ChildrenUpdates;
}) => void;

export const createElementsTree = ({
  instance,
  Component,
  onChangeChildren,
}: {
  instance: Instance;
  Component: (props: WrapperComponentProps) => JSX.Element;
  onChangeChildren?: OnChangeChildren;
}): JSX.Element => {
  const children: Array<string | JSX.Element> = [];

  for (const child of instance.children) {
    const element =
      typeof child === "string"
        ? child
        : createElementsTree({
            instance: child,
            Component,
            onChangeChildren,
          });
    children.push(element);
  }

  const props = {
    instance,
    children,
    css: toCss(instance.style),
    key: instance.id,
    onChangeChildren,
  };

  return <Component {...props} />;
};
