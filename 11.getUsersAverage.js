const users = [
    {
      username: "Yuri Gagarin",
      lang: "ru",
      age: 56
    },
    {
      username: "Nil Armstrong",
      lang: "ENG",
      age: 4
    }
  ];
  
  const getAverageAge = (usersArr) => {
    return usersArr.reduce((acc, obj) => {
      acc += obj.age / usersArr.length;
      return acc;
    }, 0);
  };
  const res = getAverageAge(users);

  