import categories from './data/categories.json';
import getCompletenessUtil from './utils/getCompleteness';
import { byId } from './utils/transforms';

const cats = categories as unknown;

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

/**
 * dump all categories
 */
export const dump = (): ICategory[] => {
  return cats as ICategory[];
};

/**
 * find a single category by id
 */
export const findById = (id: number): IFlattenedCategory | undefined =>
  byId[id];

export const getCompleteness = getCompletenessUtil;
