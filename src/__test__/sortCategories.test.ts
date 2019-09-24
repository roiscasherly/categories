import { ICategory, sortCategories } from '../';

describe('sortCategories', () => {
  it('should be a function', () => {
    expect(typeof sortCategories === 'function').toBe(true);
  });

  it('should sort categories alphabetically', () => {
    const cats = [
      {
        id: 1,
        name: 'foo',
        icon: 'foo',
        categories: [
          {
            id: 2,
            name: 'faz',
            icon: 'faz',
          },
          {
            id: 3,
            name: 'bar',
            icon: 'bar',
          },
        ],
      },
      {
        id: 4,
        name: 'baz',
        icon: 'baz',
        categories: [
          {
            id: 5,
            name: 'foobar',
            icon: 'foobar',
          },
        ],
      },
    ] as ICategory[];

    const sortedCategories = [
      {
        id: 4,
        name: 'baz',
        icon: 'baz',
        categories: [
          {
            id: 5,
            name: 'foobar',
            icon: 'foobar',
          },
        ],
      },
      {
        id: 1,
        name: 'foo',
        icon: 'foo',
        categories: [
          {
            id: 3,
            name: 'bar',
            icon: 'bar',
          },
          {
            id: 2,
            name: 'faz',
            icon: 'faz',
          },
        ],
      },
    ] as ICategory[];

    const collator = new Intl.Collator('en');
    const sortedCats = sortCategories(cats, collator);
    expect(sortedCats).toEqual(sortedCategories);
  });
});
