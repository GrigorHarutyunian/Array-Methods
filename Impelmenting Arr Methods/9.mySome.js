const array = [1, 23, 42, 19, 32];
const mySome = (arr, cb) => {
  for (let x = 0; x < arr.length; x++) {
    if (cb(arr[x])) {
      return true;
    }
  }
  return false;
};
const callBack = (val, i, arr) => val < 0;
const res = mySome(array, callBack);

