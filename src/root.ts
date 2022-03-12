import { createElementsTree } from "~/create-elements-tree";
import { WrapperComponent } from "~/wrapper-component";
import { useAllUserProps } from "~/user-props/all-user-props";
//import type { Tree, InstanceProps } from "~/shared/db";
import { globalCss } from "~/stitches";

// @todo need to use types generated by prisma
type Tree = any;
type InstanceProps = any;

export type Data = {
  tree: Tree;
  props: Array<InstanceProps>;
};

export const globalStyles = globalCss({
  body: {
    margin: 0,
  },
});

export const Root = ({ data }: { data: Data }): JSX.Element => {
  globalStyles();
  useAllUserProps(data.props);
  return createElementsTree({
    instance: data.tree.root,
    Component: WrapperComponent,
  });
};
