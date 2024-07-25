/**
 * omit - creates an object composed of enumerable property fields
 * @param {object} obj - the source object
 * @param {...string} fields - the properties paths to omit
 * @returns {object} - returns the new object
 */

export const omit = (obj, ...fields) => {
  let result = {};
  let fieldSet = new Set(fields);

  Object.keys(obj).forEach((key) => {
    if (!fieldSet.has(key)) {
      result[key] = obj[key];
    }
  });

  return result;
};

