function camelize(str) {
  let result = null;
  const arr = str.split("");

  arr.forEach((elem, i) => {
    if (elem.includes("-")) {
      arr.splice(i, 1);
      arr[i] = arr[i].toUpperCase();
    }
  });

  result = arr.join("");
  return result;
}
