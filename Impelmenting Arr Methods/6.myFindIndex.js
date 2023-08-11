const array = [10, 23, 13, 4, 11, 26, 8, 1];
const myFindIndex = (arr, cb) => {
  for (let x = 0; x < arr.length; x++) {
    if (cb(arr[x])) {
      return x;
    }
  }
  return -1;
};
const callBack = (val, i, arr) => val > 10;
const res = myFindIndex(array, callBack);

