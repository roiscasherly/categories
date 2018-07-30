# Categories

This is a JavaScript utility module that represents a category taxonomy (nested list)
for places people care about in the world, aka Points of Interest (POIs).
Categories represent the place type, for example a Starbucks is a `coffee_shop`.

# Setup

## Clone

```bash
git@github.com:streetcredlabs/categories.git && cd categories
```

## Install dependencies

```bash
npm i
```

## To Install Package through Github Directly

Include this snippet of code under the `dependencies` section within `package.json` file:

```bash
"categories": "git+ssh://github.com/streetcredlabs/categories.git"
```

`Note`: This is used for local module testing, because we haven't published the package through `yarn` nor `npm` yet. The user can `npm install` to download the package as if it was a `npm`/`yarn` package.

# Usage

### Import/require in the JavaScript client code

```JavaScript
// using CommonJS
const { findByID } = require('categories');

// using ES6
import { findByID } from 'categories';
```

### Updating the Web bundle with Changes

```JavaScript
yarn build
```

# Plugins/Modules Used Within Package

- [Rollup-plugin-json](https://github.com/rollup/rollup-plugin-json), which allows Rollup to import data from a JSON file.
- [Debug](https://www.npmjs.com/package/debug), which is a node module and tiny JavaScript debugging utility modelled after Node.js core's debugging technique
- [Rollup-plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve), which allows us to load third-party modules in node_modules.
- [Rollup-plugin-commonjs](https://github.com/rollup/rollup-plugin-commonjs), which coverts CommonJS modules to ES6, which stops them from breaking Rollup.
- [Babel](https://babeljs.io), which transpiles new features of JavaScript (ES6/ES2015 and so on) into ES5
- [Eslint](https://eslint.org), which enforces consistent coding practices and helps catch tricky bugs like missing brackets or parentheses.

# API

### findByID

```JavaScript
const category = findByID(1);
```

This function allows the client to lookup the category object by its id.
Category objects will have the following structure. Categories may be nested.

```JavaScript
{
  "id": 1,
  "name": "Arts & Entertainment",
  "tilezen_icon": "theatre",
  "categories": [ <category> ]
}
```

# Why Are We Using Rollup.js?

- Represents the next generation of build tools in terms of its performance (build time), intermediate configuration (less complicated than webpack but more involved than Parcel), and optional but out-of-the-box features likes source maps, and not using a .babelrc.
- Rich ecosystem of plugins for file loading/dev servers
- Code splitting
- Tree shaking (live code inclusion / dead code elimination)
- esnext:main entry in package.json to import es2015+ (renamed to ‘module’)
- Scope hoisting
- Simple API
- Since codebase is ES2015 modules and we're making something to be used by other people

`Reference:` [Rollup v. Webpack v. Parcel by Adam Gerard](https://x-team.com/blog/rollup-webpack-parcel-comparison/)

# TODO:

- [x] setup travis tests
- [ ] setup npm module
- [ ] setup yarn
- [ ] setup semantic release for version number maintenance
- [x] add prettier
- [ ] add eslint
