function filterRange(arr, a, b) {
  const found = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= a && arr[i] <= b) {
      found.push(arr[i]);
    }
  }
  return found;
}
