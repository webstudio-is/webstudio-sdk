#!/usr/bin/env node --experimental-loader esbuild-node-loader
import esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";

esbuild.build({
  entryPoints: ["src/index.ts"],
  bundle: true,
  platform: "node",
  outdir: "lib",
  plugins: [nodeExternalsPlugin()],
});
