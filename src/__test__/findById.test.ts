import { findById } from '../';

import { ICategory } from '../';

describe('findById', () => {
  it('should be a function', () => {
    expect(typeof findById === 'function').toBe(true);
  });

  it('should return the correct object', () => {
    const id = 8016;
    const catObj = findById(id) as ICategory;
    expect(catObj.id).toBe(id);
    expect(Array.isArray(catObj.attributes)).toBe(true);
    const catWithoutAttributes = findById(6105) as ICategory;
    expect(catWithoutAttributes.attributes).toBe(undefined);
  });

  it('should return undefined if not found', () => {
    expect(findById(99999999)).toEqual(undefined);
  });
});
