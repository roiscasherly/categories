import json from "rollup-plugin-json";
import typescript from "rollup-plugin-typescript2";
import commonjs from "rollup-plugin-commonjs";
import resolve from "rollup-plugin-node-resolve";
import { uglify } from "rollup-plugin-uglify";

// We don't want to minify the bundle during development so we set
// ROLLUP_WATCH=true when running yarn start, but no other time.
const shouldMinify = !process.env.ROLLUP_WATCH;

export default {
  input: "src/index.ts",
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
    typescript(),
    commonjs(),
    shouldMinify && uglify()
  ]
};
