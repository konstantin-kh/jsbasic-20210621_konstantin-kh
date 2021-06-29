function ucFirst(str) {
  if (!str.includes(' ')) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
  } else {
    return false;
  }
}
