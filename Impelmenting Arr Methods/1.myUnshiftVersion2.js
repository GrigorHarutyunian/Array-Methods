const array = [1, 2, 3, 4, 5];
const myUnshift = (arr, ...num) => {
  const arrClone = [...arr];
  let length = arr.length - 1 + (num.length + 1);
  let s = 0;
  let y = 0;
  while (arr.length < length) {
    if (s < num.length) {
      arr[s] = num[s];
    } else {
      arr[s] = arrClone[y];
      y++;
    }
    s++;
  }

  return arr.length;
};
const res = myUnshift(array, -5, -4, -3, -2, -1, 0);


