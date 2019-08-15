import categories from '../data/categories';
const lingui = require('@lingui/core');

import en from '../locales/en/messages';

const i18n = lingui.setupI18n({
  language: 'en',
  catalogs: {
    en,
  },
});

import { dump } from '../';

describe('dump', () => {
  it('should be a function', () => {
    expect(typeof dump === 'function').toBe(true);
  });

  it('should be the categories array', () => {
    expect(dump()).toEqual(categories(i18n));
  });
});
