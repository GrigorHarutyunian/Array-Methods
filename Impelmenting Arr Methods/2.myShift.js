const arr = [13, 0, 1, 4];
const myShift = (arr) => {
  let firsTElem = arr[0];
  for (let x = 0; x < arr.length; x++) {
    arr[x] = arr[x + 1];
  }
  arr.length--;
  return firsTElem;
};
const res = myShift(arr);
