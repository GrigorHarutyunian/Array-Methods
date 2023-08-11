const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const myFilter = (arr, cb) => {
  const newArr = [];
  for (let x = 0; x < arr.length; x++) {
    if (cb(arr[x])) {
      newArr.push(arr[x]);
    }
  }
  return newArr;
};
const callBack = (val, i, arr) => val % 2;
const res = myFilter(array, callBack);

