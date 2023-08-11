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
  
  const filterUsers = (users) => {
    return users.filter((obj) => {
      return obj.lang !== "ru";
    });
  };
  const res = filterUsers(users);

  