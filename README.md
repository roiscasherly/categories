# Categories [![Build Status](https://travis-ci.com/streetcredlabs/categories.svg?token=kd4tyu6APW8yEuYYcqLi&branch=master)](https://travis-ci.com/streetcredlabs/categories)

This is a JavaScript utility module that represents a category taxonomy (nested list)
for places people care about in the world, aka Points of Interest (POIs).
Categories represent the place type, for example a Starbucks is a `coffee_shop`.

## Usage

### Install via npm or yarn

```bash
yarn add @streetcredlabs/categories
or
npm i --save @streetcredlabs/categories
```

### Import/require in the JavaScript client code

```JavaScript
// using CommonJS
const { findById } = require('@streetcredlabs/categories');

// using ES6
import { findById } from '@streetcredlabs/categories';
```

## API

### findById

This function allows the client to look up the category object by its id. Categories may be nested.

```JavaScript
import { findById } from '@streetcredlabs/categories';
const category = findById(1);
```

```JavaScript
{
  "id": 1,
  "name": "Arts & Entertainment",
  "icon": "theatre",
  "categories": [ <category> ]
}
```

### dump
Returns the entire categories array.

```JavaScript
import { dump } from '@streetcredlabs/categories';
const categories = dump();
```

```javascript
[
  {
    "id": 1,
    "name": "Arts & Entertainment",
    "icon": "theatre",
    "categories": [...]
  },
  ...
]
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

# Project Technical Decisions

## Plugins/Modules Used Within Package

- [Rollup-plugin-json](https://github.com/rollup/rollup-plugin-json), which allows Rollup to import data from a JSON file.
- [Rollup-plugin-node-resolve](https://github.com/rollup/rollup-plugin-node-resolve), which allows us to load third-party modules in node_modules.
- [Rollup-plugin-commonjs](https://github.com/rollup/rollup-plugin-commonjs), which coverts CommonJS modules to ES6, which stops them from breaking Rollup.
- [Babel](https://babeljs.io), which transpiles new features of JavaScript (ES6/ES2015 and so on) into ES5

## Why Are We Using Rollup.js?

- Represents the next generation of build tools in terms of its performance (build time), intermediate configuration (less complicated than webpack but more involved than Parcel), and optional but out-of-the-box features likes source maps, and not using a .babelrc.
- Rich ecosystem of plugins for file loading/dev servers
- Code splitting
- Tree shaking (live code inclusion / dead code elimination)
- esnext:main entry in package.json to import es2015+ (renamed to ‘module’)
- Scope hoisting
- Simple API
- Since codebase is ES2015 modules and we're making something to be used by other people

`Reference:` [Rollup v. Webpack v. Parcel by Adam Gerard](https://x-team.com/blog/rollup-webpack-parcel-comparison/)
