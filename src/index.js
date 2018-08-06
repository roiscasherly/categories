import { byId } from "./utils/transforms";
import categories from "./data/categories.json";

/**
 * dump
 * @return {Array} - An array of all Category objects
 */
export const dump = () => categories;

/**
 * findById
 * @param {Int} id - A valid Category id
 * @return {Object} - A Category object
 */
export const findById = (id = null) => {
  if (!id) {
    throw Error();
  }

  return byId[id] || {};
};
