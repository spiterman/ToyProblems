function compress(str) {
  let currentLetterCount = 0;
  let currentLetter = "";
  let result = [];

  for(let i = 0; i < str.length; i++) {

    if(str[i] !== currentLetter) {
      result.push(currentLetter);
      currentLetter = str[i];
      if(currentLetterCount > 1) {
        result.push(String(currentLetterCount));
      }
      currentLetterCount = 1;
    } else {
      currentLetterCount += 1;
    }
  }

  result.push(currentLetter)
  if(currentLetterCount > 1) {
    result.push(currentLetterCount)
  }

  return result.join("");
}

console.log(compress("AABCCCCAAAB"))
