const lingui = require('@lingui/core');

import en from './locales/en/messages';
import fil from './locales/fil/messages';
import id from './locales/id/messages';
import ms from './locales/ms/messages';
import th from './locales/th/messages';
import vi from './locales/vi/messages';
import zhHans from './locales/zh-Hans/messages';

import categories from './data/categories';
import getCompletenessUtil from './utils/getCompleteness';
import { byId } from './utils/transforms';

const catalogs = {
  en,
  fil,
  id,
  ms,
  th,
  vi,
  'zh-Hans': zhHans,
};

// Some shared types
export interface IFlattenedCategory {
  id: number;
  name: string;
  icon: string;
  attributes?: ICategoryAttribute[];
}

export interface IDict<TValue> {
  [id: string]: TValue;
}

export interface IFlattenedCategoriesById {
  [id: string]: IFlattenedCategory;
}

export interface ICategory extends IFlattenedCategory {
  categories: ICategory[];
}

declare enum CategoryType {
  boolean,
  object,
  string,
}

interface ICategoryAttribute {
  name: string;
  type: CategoryType;
  required: boolean;
}

export enum Languages {
  en = 'en',
  fil = 'fil',
  id = 'id',
  ms = 'ms',
  th = 'th',
  vi = 'vi',
  'zh-Hans' = 'zh-Hans',
}

/**
 * dump all categories
 */
export const dump = (
  language: Languages = Languages.en,
  sortAlphabetically: boolean = true
): ICategory[] => {
  const i18n = lingui.setupI18n({
    language: Object.keys(catalogs).includes(language)
      ? language
      : Languages.en,
    catalogs,
  });

  const cats = categories(i18n) as ICategory[];

  if (sortAlphabetically) {
    const collator = new Intl.Collator(language);
    const sortedCats = sortCategories(cats, collator) as ICategory[];
    return sortedCats;
  }

  return cats;
};

/**
 * find a single category by id
 */
export const findById = (
  catId: number,
  language: Languages = Languages.en
): IFlattenedCategory | undefined => byId(dump(language))[catId];

/**
 * Sorts categories alphabetically based on category name in locale
 */
export const sortCategories = (
  cats: ICategory[],
  collator: Intl.Collator
): ICategory[] => {
  const sortedCategories = cats;
  sortedCategories.sort((a, b) => collator.compare(a.name, b.name));

  sortedCategories.forEach(category => {
    const subcategories = category.categories;

    if (subcategories && subcategories.length) {
      sortCategories(subcategories, collator);
    }
  });

  return sortedCategories;
};

export const flatten = byId;

export const getCompleteness = getCompletenessUtil;
