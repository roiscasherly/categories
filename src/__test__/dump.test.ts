import categories from '../data/categories';
const lingui = require('@lingui/core');

import en from '../locales/en/messages';

const i18n = lingui.setupI18n({
  language: 'en',
  catalogs: {
    en,
  },
});

import { dump, ICategory, sortCategories } from '../';

describe('dump', () => {
  it('should be a function', () => {
    expect(typeof dump === 'function').toBe(true);
  });

  it('should be the categories array', () => {
    const cats = categories(i18n) as ICategory[];
    const collator = new Intl.Collator('en');
    const sortedCats = sortCategories(cats, collator);

    expect(dump()).toEqual(sortedCats);
  });
});
