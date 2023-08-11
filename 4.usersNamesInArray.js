const users = [
    {
      username: "Yuri Gagarin",
      lang: "ru"
    },
    {
      username: "Nil Armstrong",
      lang: "ENG"
    }
  ];
  
  const getUserNames = (usersArr) => {
    return usersArr.map((obj) => {
      return obj.username;
    });
  };
  const res = getUserNames(users);

  