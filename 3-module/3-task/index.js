function camelize(str) {
  const arr = str.split('');

  let res = arr.map((elem, i) => {
    if (elem === '-') {
      arr.splice(i, 1);
      arr[i] = arr[i].toUpperCase();
    }
  });

  return res = arr.join('');
}
