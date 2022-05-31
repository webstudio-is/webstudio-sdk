#!/usr/bin/env node --experimental-loader esbuild-node-loader

import path from "path";
import docgen from "react-docgen-typescript";
import fg from "fast-glob"
import fs from "fs-extra"
import {propsToArgTypes} from "../src/arg-types/utils";

const tsConfigPath = path.resolve("./tsconfig.json")

const options = {
    shouldExtractLiteralValuesFromEnum: true,
    shouldRemoveUndefinedFromOptional: true,
}

// Create a parser with using your typescript config
const tsConfigParser = docgen.withCustomConfig(tsConfigPath, options);

// Search for components
const componentFiles = fg.sync(['./src/components/*.tsx', '!./src/**/*.stories.tsx']);

// For each component file generate argTypes based on the propTypes
componentFiles.forEach(filePath => {
    const jsonPath = filePath.replace('.tsx', '.props.json')
    const res = tsConfigParser.parse(filePath)
    const argTypes = propsToArgTypes(res[0].props)
    fs.ensureFileSync(jsonPath)
    fs.writeJsonSync(jsonPath, argTypes)
    console.log(`Done generating ${jsonPath}`)
})
