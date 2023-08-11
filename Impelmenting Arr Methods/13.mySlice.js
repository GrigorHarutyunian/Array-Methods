const array = [1, 2, 3, 4, 5];
const start = 3;
const end = -1;
const mySlice = (arr, start, end = arr.length) => {
  let newArr = [];
  if (end < 0) {
    end = arr.length + end;
  }
  for (let x = start; x < end; x++) {
    newArr.push(arr[x]);
  }
  return newArr;
};

const res = mySlice(array, start, end);
