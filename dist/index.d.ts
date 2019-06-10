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
    string
}
interface ICategoryAttribute {
    name: string;
    type: CategoryType;
    required: boolean;
}
/**
 * dump all categories
 */
export declare const dump: () => ICategory[];
/**
 * find a single category by id
 */
export declare const findById: (id: number) => IFlattenedCategory;
export declare const getCompleteness: (place: import("./utils/getCompleteness.js").IPlace) => number;
export {};
