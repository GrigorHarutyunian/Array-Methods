const array = ["1", "2px", "43"];
const parseInteger = (arr) => {
  return arr.map((val) => {
    return +val || null;
  });
};
const res = parseInteger(array);

