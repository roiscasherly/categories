
const { findByID } = require('../index');
const categories = require('../data/categories.json');

test('findByID returns an object', () => {
  expect(findByID(1)).toBe(categories[0]);
});

// TODO: test for id as string
