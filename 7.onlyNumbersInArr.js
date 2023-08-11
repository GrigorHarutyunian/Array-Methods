const array = [
    Infinity,
    2,
    "a",
    true,
    {},
    undefined,
    55,
    false,
    "hi",
    null,
    166,
    NaN
  ];
  const onlyNumbersInArr = (arr) => {
    return arr.filter((val) => {
      return typeof val === "number" && !isNaN(val) && isFinite(val);
    });
  };
  const res = onlyNumbersInArr(array);
  
  