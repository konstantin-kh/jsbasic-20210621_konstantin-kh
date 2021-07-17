function camelize(str) {
  const arr = str.split("-");

  const res = arr.map((elem, i) => {
    if (typeof elem[0] !== "undefined") {
      return i < 1 ? elem : elem[0].toUpperCase() + elem.slice(1);
    } else {
      return elem.toUpperCase() + elem.slice(1);
    }
  });

  return res.join("");
}
