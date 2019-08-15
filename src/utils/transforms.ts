import { ICategory, IFlattenedCategoriesById, IFlattenedCategory } from '../';

const flattenArray = (arr: ICategory[]): IFlattenedCategory[] => {
  const arrOfObj: IFlattenedCategory[] = [];

  const flatten = (nestcats: ICategory[]): void => {
    nestcats.forEach(
      (obj: ICategory): void => {
        const flattened: IFlattenedCategory = {
          id: obj.id,
          name: obj.name,
          icon: obj.icon,
          attributes: obj.attributes,
        };

        arrOfObj.push(flattened);

        if (obj.categories) {
          flatten(obj.categories);
        }
      }
    );
  };

  flatten(arr);

  return arrOfObj;
};

export const byId = (cats: ICategory[]) =>
  flattenArray(cats).reduce(
    (prev: IFlattenedCategoriesById, curr: IFlattenedCategory) => {
      prev[curr.id] = curr;
      return prev;
    },
    {} as IFlattenedCategoriesById
  );
