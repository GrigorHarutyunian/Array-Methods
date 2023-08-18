const array = [1, 2, [3, 4, [5, [6]], 7]];
const myFlat = (arr, n) => {
  if (n === 0) {
    return arr;
  }

  const newArr = [];
  for (let x = 0; x < arr.length; x++) {
    if (Array.isArray(arr[x])) {
      newArr.push(...arr[x]);
    } else {
      newArr.push(arr[x]);
    }
  }

  return myFlat(newArr, n - 1);
};
const res = myFlat(array, 1);
