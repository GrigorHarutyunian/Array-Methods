const arr = [0, 1, 2, 3, 4];
const myPush = (arr, ...rest) => {
  rest.forEach((val) => {
    arr[arr.length] = val;
  });
  return arr.length;
};
const res = myPush(arr, 5, 6, 7, 8, 9);

