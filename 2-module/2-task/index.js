function isEmpty(obj) {
  for (const prop in obj) {
    if (prop || typeof prop === 'undefined') {
      return false;
    }
  }
  return true;
}
