import { type LoaderFunction } from "@remix-run/server-runtime";
export const loader: LoaderFunction = async () => {
  // @todo is there a better way?
  // When imported from webstudio package if we use import, it's gonna throw
  const fs = require("fs");
  const path = require("path");
  const dir = path.join(process.cwd(), ".webstudio");
  const tree = JSON.parse(fs.readFileSync(path.join(dir, "tree.json"), "utf8"));
  const props = JSON.parse(
    fs.readFileSync(path.join(dir, "props.json"), "utf8")
  );
  return {
    tree,
    props,
  };
};
