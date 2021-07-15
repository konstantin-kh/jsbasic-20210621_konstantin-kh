function showSalary(users, age) {
  let list = "";

  const foundUsers = users
    .filter((user) => user.age <= age)
    .map((user) => {
      return [user.name, user.balance];
    });

  if (foundUsers.length) {
    foundUsers.flat().forEach((elem, i, arr) => {
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
