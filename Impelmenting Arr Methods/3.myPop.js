const arr = [0, 1, 4];
const myPop = (arr) => {
  let lastElem = arr[arr.length - 1];
  arr.length--;
  return lastElem;
};
const res = myPop(arr);
