function showSalary(users, age) {
  const foundUsers = [];
  let list = "";

  users.forEach((user) => {
    if (user.age <= age) {
      foundUsers.push(user.name);
      foundUsers.push(user.balance);
    }
  });

  if (foundUsers.length) {
    foundUsers.forEach((elem, i, arr) => {
      if (i === 0) {
        list += `'${elem}, `;
      } else if (i % 2 === 0) {
        list += `${elem}, `;
      } else if (i % 2 !== 0 && i !== arr.length - 1) {
        list += `${elem}\n`;
      } else {
        list += `${elem}'`;
      }
    });
  }

  return list.slice(1, -1);
}
