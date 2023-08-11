const array = [1, 2, 3, 4, 5];
const myUnshift = (arr, ...rest) => {
  const myUnshiftClone = [...rest, ...arr];
  myUnshiftClone.forEach((val, i) => {
    arr[i] = val;
  });
  return arr.length;
};
const res = myUnshift(array, -2, -1, 0);

