import { type LoaderFunction } from "@remix-run/server-runtime";
import fs from "fs";
import path from "path";

export const loader: LoaderFunction = async () => {
  const dir = path.join(process.cwd(), ".webstudio");
  const tree = JSON.parse(fs.readFileSync(path.join(dir, "tree.json"), "utf8"));
  return {
    tree,
  };
};
