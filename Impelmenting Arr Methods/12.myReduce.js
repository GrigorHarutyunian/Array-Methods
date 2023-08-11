const arr = [1, 2, 3, 4, 5];

const myReduce = (arr, cb, acc = arr[0]) => {
  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i], i);
  }
  return acc;
};

const res = myReduce(
  arr,
  (acc, el) => {
    return acc + el;
  },
  0
);

