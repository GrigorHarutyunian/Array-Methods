const users = [
    {
      username: "Yuri Gagarin",
      lang: "ru",
      isAstronaut: true
    },
    {
      username: "Nil Armstrong",
      lang: "ENG",
      isAstronaut: true
    },
    {
      username: "Elon Musk",
      isAstronaut: false
    }
  ];
  const filterByField = (users, keyname) => {
    return users.filter((obj) => {
      return obj[keyname];
    });
  };
  const res = filterByField(users, "isAstronaut");
  
  