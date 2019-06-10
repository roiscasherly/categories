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
import { dump } from "@streetcredlabs/categories";
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

### getCompleteness

Determines how complete a place is based on our scoring system.

```javascript
import { getCompleteness } from '@streetcredlabs/categories';
const place = funcThatGetsAStandardPlaceObj();
console.log(getCompleteness(place)); // 0.75
```

---

# Contributing to this project

Pull requests are warmly welcomed.

### Clone the repo

```bash
git clone git@github.com:streetcredlabs/categories.git && cd categories
```

### Install dependencies

```bash
yarn
```

### Run tests and watch for changes:

```bash
yarn test-watch
```

#### Run tests once:

```bash
yarn test
```

### Run build and watch for changes:

```bash
yarn start
```

#### Run build once:

```bash
yarn build
```

## Releasing

Release a new version of this module based off the version in `package.json`. **Note** you will need to have publish access to the `streetcredlabs` npm account and be authenticated.

```bash
yarn release
```

The script does a few things:

- Builds the `dist` version with `yarn build` (⚠️ _NOTE: This needs improvement. Right now, if this results in changes, they won't be committed and it could be weird_)
- Creates a new git tag from the `package.json` version
- Attempts to publish to npm with `npm publish`
