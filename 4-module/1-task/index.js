function makeFriendsList(friends) {
  const ul = document.createElement("ul");

  friends.forEach(friend => {
    const li = document.createElement("li");
    li.innerHTML = `${friend.firstName} ${friend.lastName}`;
    ul.appendChild(li);
  });

  return ul;
}
