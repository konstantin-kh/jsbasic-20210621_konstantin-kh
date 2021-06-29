function factorial(n) {
  let result = 1;
  let counter = n;
  if (n <= 1) {
    return 1;
  }
  for (let i = 0; i < n; i++) {
    result *= counter;
    counter--;
  }
  return result;
}

factorial(5);
