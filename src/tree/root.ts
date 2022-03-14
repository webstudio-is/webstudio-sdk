import { useAllUserProps } from "../user-props/";
import type { Tree, InstanceProps } from "../db-types";
import { globalCss } from "../css";
import { createElementsTree } from "./create-elements-tree";
import {
  WrapperComponent,
  type WrapperComponentProps,
} from "./wrapper-component";

export type Data = {
  tree: Tree;
  props: Array<InstanceProps>;
};

export const globalStyles = globalCss({
  body: {
    margin: 0,
  },
});

type RootProps = {
  data: Data;
  Component?: (props: WrapperComponentProps) => JSX.Element;
};

export const Root = ({ data, Component }: RootProps): JSX.Element => {
  globalStyles();
  useAllUserProps(data.props);
  return createElementsTree({
    instance: data.tree.root,
    Component: Component ?? WrapperComponent,
  });
};
