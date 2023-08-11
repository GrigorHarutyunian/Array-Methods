const array = [1, 2, 3, 4, 5];
const start = 1;
const deletVal = 2;
const addVals1 = "a";

const mySplice = (arr, start, deletV, ...ad) => {
  let newArr = [];
  for (let x = start; x < start + deletV; x++) {
    newArr.push(arr[x]);
  }
  const arrClon = [...arr];
  let y = 0;
  for (let x = 0; x < arrClon.length; x++) {
    if (newArr.includes(arrClon[x])) {
      for (let i = 0; i < ad.length; i++) {
        arr[y] = ad[i];
        y++;
      }
      ad = [];
    } else {
      arr[y] = arrClon[x];
      y++;
    }
  }
  ////newArr-- [1,4,5]
  return arr;
};
const res = mySplice(array, start, deletVal, addVals1, "s", "s", "m", "v");

