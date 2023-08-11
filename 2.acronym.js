const string = "Prisoner of War";
const acronym = (str) => {
  const arrSplitStr = str.split(" ");
  return arrSplitStr.reduce((acc, val) => {
    return acc + val[0].toUpperCase();
  }, "");
};
const res = acronym(string);

