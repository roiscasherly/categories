export interface IPlaceAttributes {
    hours?: any;
    outdoorSeating?: boolean;
    phone?: string;
    website?: string;
    wheelchairAccessible?: boolean;
    [prop: string]: any;
}
export interface IPlace {
    name?: string;
    location?: any;
    categories?: number[];
    images?: any[];
    attributes?: IPlaceAttributes;
}
declare const _default: (place: IPlace) => number;
/**
 * Determines how complete a place is based on our scoring system.
 * @param {Object} place - A standard Place object
 * @return {Int} - A percentage between 0 and 100
 */
export default _default;
