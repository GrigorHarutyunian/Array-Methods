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
  
  const getUserNamesLengths = (usersArr) => {
    return usersArr.map((obj) => {
      return obj.username.length;
    });
  };
  const res = getUserNamesLengths(users);
  
  