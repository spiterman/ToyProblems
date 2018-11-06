function anagramGroups(words) {
  let wordSet = new Set(words);
  let result = [];

  wordSet.forEach(word => {
    let currentWord = word;
    let anagramsOfCurrentWord = [];
    wordSet.forEach(w => {
      if(areAnagrams(currentWord, w)){
        anagramsOfCurrentWord.push(w);
        wordSet.delete(w);
      }
    })
    result.push(anagramsOfCurrentWord);
  })
  return result;
}

function areAnagrams(word1, word2) {
  if(word1.length !== word2.length) {
    return false;
  }
  let counts1 = countCharacters(word1);
  let counts2 = countCharacters(word2);

  if(Object.keys(counts1).length !== Object.keys(counts2).length) {
    return false;
  }
  for(let key in counts1) {
    if(!(key in counts2) || counts2[key] !== counts1[key]) {
      return false;
    }
  }
  return true;
}

function countCharacters(word) {
  let result = {};
  for(let i = 0; i < word.length; i++) {
    let char = word[i]
    if(result[char] === undefined) {
      result[char] = 1;
    } else {
      result[char] += 1;
    }
  }
  return result;
}

console.log(anagramGroups(["eat", "tea", "tan", "ate", "nat", "bat"]))
