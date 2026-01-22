const consonants = new Set("bcdfghjklmnpqrstvwxzBCDFGHJKLMNPQRSTVWXZ");
const vowels = new Set("aeiouyAEIOUY");
const letters = new Set([...vowels, ...consonants]);

function countCharactersInSet(inputStr, inputSet, setContainsChar){
  let count = 0;
  for(let i = 0; i < inputStr.length; i++) {
    let letter = inputStr[i];
    if(setContainsChar && inputSet.has(letter)) {
      count++;
    } else if(!setContainsChar && !inputSet.has(letter)) {
      count++;
    }
  }
  return count;
}

function countConsonants(word) {
  return countCharactersInSet(word, consonants, true);
}

function countVowels(word) {
  return countCharactersInSet(word, vowels, true);
}

function countNonLetters(word) {
  return  countCharactersInSet(word, letters, false);
}

function breakTie(strA, strB) {
  return strA <= strB ? strA : strB;
}

function MaxCountObject(charCount, word) {
  this.charCount = charCount;
  this.word = word;
}


function updateMaxCount(maxCountObj, word, charCountFn) {
  let charCount = charCountFn(word);

  if(maxCountObj.charCount < charCount) {
    maxCountObj.charCount = charCount;
    maxCountObj.word = word;
  } else if(maxCountObj.charCount === charCount) {
    maxCountObj.word = maxCountObj.word !== "" ? breakTie(maxCountObj.word, word) : word;
  }
}

function findTargetWords(inputArray) {

  let maxConsonantCountObj = new MaxCountObject(0, "");
  let maxVowelCountObj = new MaxCountObject(0, "");
  let maxNonLetterCountObj = new MaxCountObject(0, "");

  inputArray.forEach(word => {

    updateMaxCount(maxConsonantCountObj, word, countConsonants);
    updateMaxCount(maxVowelCountObj, word, countVowels);
    updateMaxCount(maxNonLetterCountObj, word, countNonLetters);
  });

  return [
    maxConsonantCountObj.word,
    maxVowelCountObj.word,
    maxNonLetterCountObj.word
  ];
}

console.log(findTargetWords(["strengths", "ant 1", "turkey", "facetious"] ));
console.log(findTargetWords([""]));
console.log(findTargetWords(["caat", "aoat1 ", "1"]));
