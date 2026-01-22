function interlace(strA, strB) {
  let result = new Set();

  function combine(indexA, indexB, substr) {
    if(indexA >= strA.length && indexB >= strB.length) {
      return result.add(substr);
    }
    let lastChar = substr[substr.length - 1];
    if(indexA < strA.length && strA[indexA] != lastChar) {
      combine(indexA + 1, indexB, substr + strA[indexA]);
    }
    if(indexB < strB.length && strB[indexB] != lastChar) {
      combine(indexA, indexB + 1, substr + strB[indexB]);
    }
  }

  combine(0, 0, "");
  return result;
}

console.log(interlace("abc", "123"));
console.log(interlace("abc", "cab"));
