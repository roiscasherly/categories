import { ICategory } from '../';
import { findById } from '../';

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

  // We're ignoring below because while allowing only a number at compile time
  // in this lib will fail, an end user can give whatever type they want to
  // the function and it needs to handle that.
  it('should return undefined it receives null id argument', () => {
    // @ts-ignore
    expect(findById(null)).toEqual(undefined);
  });

  it('should return undefined it receives a negative number id argument', () => {
    // @ts-ignore
    expect(findById(-666)).toEqual(undefined);
  });

  it('should return undefined it receives a string id argument', () => {
    // @ts-ignore
    expect(findById('dogs')).toEqual(undefined);
  });

  it('should return undefined it receives no id argument', () => {
    // @ts-ignore
    expect(findById()).toEqual(undefined);
  });

  it('should return undefined it receives an object as id argument', () => {
    // @ts-ignore
    expect(findById({})).toEqual(undefined);
  });

  it('should return undefined it receives an array as id argument', () => {
    // @ts-ignore
    expect(findById([])).toEqual(undefined);
  });
});
