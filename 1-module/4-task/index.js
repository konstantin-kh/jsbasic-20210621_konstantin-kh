function checkSpam(str) {
  const spamList = ['1XbeT', 'XXX', 'free', 'xxxxx'];
  let lowerStr = str.toLowerCase();

  for (let i = 0; i < spamList.length; i++) {
    if (lowerStr.includes(spamList[i].toLowerCase())) {
      return true;
    } else {
      continue;
    }
  }
  return false;
}
