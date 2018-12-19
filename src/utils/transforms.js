import categories from "../data/categories.json";

const flattenArray = arr => {
  let arrOfObj = [];

  const flatten = arr => {
    arr.forEach(obj => {
      arrOfObj.push(
        Object.keys(obj)
          .filter(k => k !== "categories")
          .reduce((prev, k) => {
            prev[k] = obj[k];
            return prev;
          }, {})
      );

      Object.keys(obj).forEach(key => {
        if (Array.isArray(obj[key])) {
          flatten(obj[key]);
        }
      });
    });
  };

  flatten(arr);

  return arrOfObj;
};

export const byId = flattenArray(categories).reduce((prev, curr) => {
  prev[curr.id] = curr;
  return prev;
});
