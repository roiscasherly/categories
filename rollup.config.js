// rollup.config.js
import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
import babel from "rollup-plugin-babel";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs"
  },
  plugins: [
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    babel({
      exclude: "node_modules/**"
    }),
    json()
  ]
};
