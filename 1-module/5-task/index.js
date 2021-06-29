function truncate(str, maxlength) {
  const symbolsArr = str.split('');

  if (symbolsArr.length > (maxlength - 1)) {
    return `${symbolsArr.slice(0, (maxlength - 1)).join('')}…`;
  }
  return str;
}
