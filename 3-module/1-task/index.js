function namify(users) {
  const names = [];
  users.forEach(prop => names.push(prop.name));
  return names;
}
