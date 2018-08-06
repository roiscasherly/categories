import babel from "rollup-plugin-babel";
import commonjs from "rollup-plugin-commonjs";
import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import { uglify } from "rollup-plugin-uglify";

// We don't want to minify the bundle during development so we set
// ROLLUP_WATCH=true when running yarn start, but no other time.
const shouldMinify = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.js",
  output: {
    file: "dist/bundle.js",
    format: "cjs"
  },
  plugins: [
    json(),
    resolve({
      jsnext: true,
      main: true,
      browser: true
    }),
    commonjs(),
    babel({
      exclude: "node_modules/**",
      plugins: ["external-helpers"]
    }),
    shouldMinify && uglify()
  ]
};
