# Categories [![Build Status](https://travis-ci.com/streetcredlabs/categories.svg?token=kd4tyu6APW8yEuYYcqLi&branch=master)](https://travis-ci.com/streetcredlabs/categories)

This is a JavaScript utility module that represents a category taxonomy (nested list)
for places people care about in the world, aka Points of Interest (POIs).
Categories represent the place type, for example a Starbucks is a `coffee_shop`.

## Usage

### To Install Package through Github Directly

Include this snippet of code under the `dependencies` section within `package.json` file:

```bash
"categories": "git+ssh://github.com/streetcredlabs/categories.git"
```

`Note`: This is used for local module testing, because we haven't published the package through `yarn` nor `npm` yet. The user can `npm install` to download the package as if it was a `npm`/`yarn` package.

### Import/require in the JavaScript client code

```JavaScript
// using CommonJS
const { findById } = require('categories');

// using ES6
import { findById } from 'categories';
```

## API

### findById

```JavaScript
const category = findById(1);
```

This function allows the client to lookup the category object by its id.
Category objects will have the following structure. Categories may be nested.

```JavaScript
{
  "id": 1,
  "name": "Arts & Entertainment",
  "icon": "theatre",
  "categories": [ <category> ]
}
```

-------------------

# Contributing to this project

Pull requests are warmly welcomed.

### Clone the repo

```bash
git clone git@github.com:streetcredlabs/categories.git && cd categories
```

### Install dependencies

```bash
yarn
or
npm i
```

### Run tests and watch for changes:

```bash
yarn test-watch
or
npm run test-watch
```

#### Run tests once:
```bash
yarn test
or
npm run test
```

### Run build and watch for changes:
```JavaScript
yarn start
or
npm run start
```

#### Run build once:

```JavaScript
yarn build
or
npm run build
```

---------------

# Plugins/Modules Used Within Package

- [Rollup-plugin-json](https://github.com/rollup/rollup-plugin-json), which allows Rollup to import data from a JSON file.
- [Rollup-plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve), which allows us to load third-party modules in node_modules.
- [Rollup-plugin-commonjs](https://github.com/rollup/rollup-plugin-commonjs), which coverts CommonJS modules to ES6, which stops them from breaking Rollup.
- [Babel](https://babeljs.io), which transpiles new features of JavaScript (ES6/ES2015 and so on) into ES5

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
