import { useAllUserProps } from "../user-props/";
import type { Tree, InstanceProps } from "../db-types";
import { globalCss, setBreakpoints } from "../stitches";
import { createElementsTree } from "./create-elements-tree";
import {
  WrapperComponent,
  type WrapperComponentProps,
} from "./wrapper-component";
import { type Breakpoint } from "../css";

export type Data = {
  tree: Tree;
  breakpoints: Array<Breakpoint>;
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
  setBreakpoints(data.breakpoints);
  globalStyles();
  useAllUserProps(data.props);
  return createElementsTree({
    instance: data.tree.root,
    breakpoints: data.breakpoints,
    Component: Component ?? WrapperComponent,
  });
};
