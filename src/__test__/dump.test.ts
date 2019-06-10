import categories from '../data/categories.json';

import { dump } from '../';

describe('dump', () => {
  it('should be a function', () => {
    expect(typeof dump === 'function').toBe(true);
  });

  it('should be the categories array', () => {
    expect(dump()).toEqual(categories);
  });
});
