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
export declare enum Languages {
    en = "en",
    fil = "fil",
    id = "id",
    ms = "ms",
    th = "th",
    vi = "vi",
    'zh-Hans' = "zh-Hans"
}
/**
 * dump all categories
 */
export declare const dump: (language?: Languages) => ICategory[];
/**
 * find a single category by id
 */
export declare const findById: (catId: number, language?: Languages) => IFlattenedCategory | undefined;
export declare const flatten: (cats: ICategory[]) => IFlattenedCategoriesById;
export declare const getCompleteness: (place: import("./utils/getCompleteness").IPlace) => number;
export {};
