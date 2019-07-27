import typescript from "rollup-plugin-typescript";

import pkg from "./package.json";

export default {
  input: "./src/eda.ts",
  output: [
    {
      file: "dist/eda.js",
      format: "cjs"
    },
    {
      file: "dist/eda.es.js",
      format: "es"
    },
    {
      file: "dist/eda.vanilla.js",
      format: "iife",
      name: "eda" // the global which can be used in a browser
    }
  ],
  external: [
    ...Object.keys(pkg.dependencies || {}),
    ...Object.keys(pkg.peerDependencies || {})
  ],
  plugins: [
    typescript({
      typescript: require("typescript")
    })
  ]
};
