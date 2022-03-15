import { type LoaderFunction } from "@remix-run/server-runtime";
export const loader: LoaderFunction = async () => {
  // @ts-expect-error the path is supposed to be at the consumer fs.
  const tree = await import(".webstudio/tree.json");
  // @ts-expect-error
  const props = await import(".webstudio/props.json");
  return {
    tree,
    props,
  };
};
