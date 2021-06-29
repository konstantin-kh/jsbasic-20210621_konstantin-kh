function sumSalary(salaries) {
  const salariesArr = Object.values(salaries).filter(prop => Number.isFinite(prop));
  return salariesArr.reduce((total, salary) => total + salary, 0);
}
