const array = [10, 23, 13, 4, 11, 26, 8, 1];
const myFind = (arr, cb) => {
  for (let x = 0; x < arr.length; x++) {
    if (cb(arr[x], x, arr)) {
      return arr[x];
    }
  }
  return undefined;
};
const callBack = (val, i, arr) => i > 1;
const res = myFind(array, callBack);

