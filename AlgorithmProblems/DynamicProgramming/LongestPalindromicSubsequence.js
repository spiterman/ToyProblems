function longestPalindromicSequence(str) {
  let strArr = [];

  for(let i = 0; i < str.length; i++) {
    strArr.push("|");
    strArr.push(str[i]);
  }
  strArr.push("|")

  console.log(strArr)
}

longestPalindromicSequence("hello world")
