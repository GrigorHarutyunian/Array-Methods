const arr = [4, 3, 2, 1];
const sortName = "Desc";
const sortBy = (arr, sortName = "Asc") => {
  if (sortName === "Asc") {
    return arr.sort((a, b) => a - b);
  } else if (sortName === "Desc") {
    return arr.sort((a, b) => b - a);
  }
  return "invalid Sortname";
};

const res = sortBy(arr, sortName);

