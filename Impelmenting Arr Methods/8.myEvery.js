const array = [1, 23, 42, 19, 32];
const myEvery = (arr, cb) => {
  for (let x = 0; x < arr.length; x++) {
    if (!cb(arr[x])) {
      return false;
    }
  }
  return true;
};
const callBack = (val, i, arr) => val < 43;
const res = myEvery(array, callBack);

