import { IDict, IFlattenedCategory } from '../';

import camelCase from 'lodash.camelcase';
import isEmpty from 'lodash.isempty';
import isObjectLike from 'lodash.isobjectlike';
import isString from 'lodash.isstring';
import xor from 'lodash.xor';
import { findById } from '../';

export interface IPlaceAttributes {
  hours?: any;
  outdoorSeating?: boolean;
  phone?: string;
  website?: string;
  wheelchairAccessible?: boolean;
  // Catch-all for mystery attrs
  [prop: string]: any;
}

export interface IPlace {
  name?: string;
  location?: any;
  categories?: number[];
  images?: any[];
  attributes?: IPlaceAttributes;
}

const isNil = (v: any): boolean => v == null;

// Quick function for adding up all values in an array. We could abstract
// this to a common utils/array.js at some point if it makes sense.
const addItUp = (a: number, b: number): number => a + b;

/**
 * Determines how complete a place is based on our scoring system.
 * @param {Object} place - A standard Place object
 * @return {Int} - A percentage between 0 and 100
 */
export default (place: IPlace) => {
  // Required props
  let requiredScore = 0;
  if (place.name) {
    requiredScore += 15;
  }
  if (place.location) {
    requiredScore += 15;
  }
  if (place.categories) {
    requiredScore += 15;
  }

  // Photo Rule: Each Photo up to 3 is worth 5 points each. Nothing beyond 3
  // adds to the score.
  const photoValue = 5;
  const photoMax = 3;
  const hasPhotos = place.images && place.images.length;
  const photoScore = hasPhotos
    ? Math.min(place.images!.length, photoMax) * photoValue
    : 0;

  /*
    Category-dependent fields: If these are either `optional` or `required`,
    calculate the score with the given values. If they're absent, just add the
    score they would have been worth to the score.
   */

  // These are all the possible attributes–and their values–a category could
  // have, at the time of this writing.
  const possibleAttrs: IDict<number> = {
    hours: 15,
    outdoorSeating: 3,
    phone: 9,
    website: 9,
    wheelchairAccessible: 4,
  };

  // These are all the attributes the current category accepts. Whether
  // require or not.
  // TODO: Determine how we want to compute completeness for Places without a
  // category
  let categoryAttrs: string[] = [];
  if (place.categories && place.categories.length > 0) {
    const firstCategory = findById(place.categories[0]);

    if (firstCategory && firstCategory.attributes) {
      categoryAttrs = firstCategory.attributes.map(a => camelCase(a.name));
    }
  }

  // This is the score of attributes we don't care about, ones that are not
  // accepted by this Place's category.
  const absentAttrsScore = xor(Object.keys(possibleAttrs), categoryAttrs)
    .map(k => possibleAttrs[k])
    .reduce(addItUp, 0);

  // Finally, go through all the attributes set on the place. As long as they
  // have some value that is not nil, we add the score for each attr from the
  // possibleAttrs above.
  const attrsScore = !isEmpty(place.attributes)
    ? Object.keys(place.attributes!)
        .map(k => {
          const v = place.attributes![k];

          // If we're looking at an {}, [], or string check if it's empty.
          if (isObjectLike(v) || isString(v)) {
            return !isEmpty(v) ? possibleAttrs[k] : 0;
          }

          // Otherwise in case of a boolean or int.
          return !isNil(v) ? possibleAttrs[k] : 0;
        })
        .reduce(addItUp, 0)
    : 0;

  return Math.min(
    [requiredScore, photoScore, absentAttrsScore, attrsScore].reduce(addItUp),
    100
  );
};
