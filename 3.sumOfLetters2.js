const obj = {
    a: 1,
    e: 1,
    i: 1,
    o: 1,
    u: 1,
    l: 1,
    n: 1,
    s: 1,
    r: 1,
    t: 1,
    d: 2,
    g: 2,
    b: 3,
    c: 3,
    m: 3,
    p: 3,
    f: 4,
    h: 4,
    v: 4,
    w: 4,
    y: 4,
    k: 5,
    j: 5,
    x: 6,
    q: 7,
    z: 7
  };
  const name = "Dog";
  const fun = (obj, name) => {
    const splitName = name.split("");
    return splitName.reduce((acc, val) => {
      acc += obj[val.toLowerCase()];
      return acc;
    }, 0);
  };
  const res = fun(obj, name);

  