let calculator = {
  num1: null,
  num2: null,
  read(a, b) {
    this.num1 = a;
    this.num2 = b;
  },
  sum() {
    return this.num1 + this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  },
};

window.calculator = calculator;
