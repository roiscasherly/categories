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

The following top-level exports are available:

### Languages

This TypeScript enum contains all available languages.

```js
> const cats = require('./dist/bundle')
undefined
> `The following languages are available: ${Object.keys(cats.Languages).join(', ')}`
'The following languages are available: en, fil, id, ms, th, vi, zh-Hans'

```

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

Call with `Languages[lang]` to get a certain category, with the name translated into the preferred language:

```JavaScript
findById(9049, 'fil')
```

returns `{ id: 9049, name: 'Pasukan', icon: 'entrance', attributes: undefined }`

### dump

Parameters:

* `language` (defaults to `en`): one of the available language codes found in the `Languages` enum
* `sortAlphabetically` (defaults to `true`): whether or not to sort categories using a language-aware sorter

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

Call with `Languages[lang]` as a second argument to get translated data: `dump('fil')`



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

## Translations

This project uses [`lingui`](https://github.com/lingui/js-lingui/) to generate gettext-format `.po` files containing all of the category names.

### Adding a new language

As an example, here's how to add a translation for the language Ido, which uses the code `io`.

The first step to add a new translation is to use `lingui` to add a new locale and extract existing strings:

```
yarn lingui add-locale io
yarn lingui extract io
```

The first command will create a stub translation file in `src/locales/io/messages.po` and the second command will append all translatable strings into that file. Provide a translator with the `messages.po`, and have them fill in the `msgstr ""`s with translations of the preceeding `msgid "..."`s.

Once all of the translations are done, transform the `po`-file into the Lingui format:

```
yarn lingui compile --typescript
```

Include the completed translation in the library by adding it to `src/index.ts`:

```diff
diff --git a/src/index.ts b/src/index.ts
index e260261..7ad39f6 100644
--- a/src/index.ts
+++ b/src/index.ts
@@ -7,6 +7,7 @@ import ms from './locales/ms/messages';
 import th from './locales/th/messages';
 import vi from './locales/vi/messages';
 import zhHans from './locales/zh-Hans/messages';
+import io from './locales/io/messages';

 import categories from './data/categories';
 import getCompletenessUtil from './utils/getCompleteness';
@@ -20,6 +21,7 @@ const catalogs = {
   th,
   vi,
   'zh-Hans': zhHans,
+  io,
 };

 // Some shared types
```

Finally, run `yarn build` and give it a test run:

```js
bc@bifurcaria:~/streetcred/categories$ node
Welcome to Node.js v12.6.0.
Type ".help" for more information.
> const cats = require('./dist/bundle')
undefined
> cats.findById(9001, 'io')
{ id: 9001, name: 'Aero', icon: 'airport', attributes: undefined }
>
```

### Maintaining translations

The `translations` package script is a shortcut for extracting and compiling translations. It should be used after categories are added or modified, or if existing translations' `po`-files have been updated.

## Local development and testing

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

### Run build once:

```bash
yarn build
```

### Generate translation files

`yarn translations`

## Releasing

Release a new version of this module based off the version in `package.json`. **Note** you will need to have publish access to the `streetcredlabs` npm account and be authenticated.

```bash
yarn release
```

The script does a few things:

- Builds the `dist` version with `yarn build` (⚠️ _NOTE: This needs improvement. Right now, if this results in changes, they won't be committed and it could be weird_)
- Creates a new git tag from the `package.json` version
- Attempts to publish to npm with `npm publish`
