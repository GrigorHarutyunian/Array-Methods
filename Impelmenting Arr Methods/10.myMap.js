const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const myMap = (arr, cb) => {
  const newArr = [];
  for (let x = 0; x < arr.length; x++) {
    newArr.push(cb(arr[x], x));
  }
  return newArr;
};
const callBack = (val, i, arr) => val * i;
const res = myMap(array, callBack);
