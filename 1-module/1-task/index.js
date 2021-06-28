function factorial(n) {
  let result = 1;
  let counter = n;
  for (let i = 0; i < n; i++) {
    if (n <= 1) {
      return 1;
    }
    result *= counter;
    counter--;
  }
  return result;
}

factorial(5);
