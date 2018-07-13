# categories

This is a JavaScript utility module that represents a category taxonomy (nested list)
for places people care about in the world, aka Points of Interest (POIs).
Categories represent the place type, for example a Starbucks is a `coffee_shop`.

## Setup

- install from npm/github

### import/require in the JavaScript client code

```JavaScript
// using CommonJS
const { findByID } = require('categories');

// using ES6
import { findByID } from 'categories';
```


## API

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

## TODO:

- [ ] setup travis tests
- [ ] setup npm module
- [ ] setup semantic release for version number maintenance
- [ ] add prettier
- [ ] add eslint
