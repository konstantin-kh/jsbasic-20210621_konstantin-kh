function getMinMax(str) {
  const numbers = str.split(" ").join(",").split(",");
  const numArr = numbers
    .filter((num) => Number(num))
    .map((value) => parseFloat(value));
  return {
    min: Math.min(...numArr),
    max: Math.max(...numArr),
  };
}
