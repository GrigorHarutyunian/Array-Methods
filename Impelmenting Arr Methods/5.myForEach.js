const array = [1, 2, 3];
const myForEach = (arr, callback) => {
  for (let x = 0; x < arr.length; x++) {
    callback(arr[x]);
  }
};
const callback = (val) => val;
const res = myForEach(array, callback);

