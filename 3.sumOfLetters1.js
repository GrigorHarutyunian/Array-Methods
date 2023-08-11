const arr = ["aeioulnsrst", "dg", "bcmp", "fhvwy", "k", "jx", "qz"];
let name = "Dog";

const fun = (arr, name) => {
  const name1 = name.split("");
  return name1.reduce((acc, letter) => {
    arr.forEach((val, i) => {
      if (val.includes(letter.toLowerCase())) {
        acc += i + 1;
      }
    });
    return acc;
  }, 0);
};
const res = fun(arr, name);
