const array = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];
const maxNum = 18;
const sumOfNumbersOver18 = (arr, maxNum) => {
  return arr.reduce((acc, val) => {
    if (val >= maxNum) {
      acc += val;
    }
    return acc
  }, 0);
};
const res = sumOfNumbersOver18(array, maxNum);
console.log(res)
