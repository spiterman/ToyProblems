function groupAnagrams(words) {
  let result = [];
  let anagramMap = {};

  words.forEach(word => {
    let anagramNum = computeAnagramNumber(word);
    if(anagramMap[anagramNum] === undefined) {
      anagramMap[anagramNum] = [word]
    } else {
      anagramMap[anagramNum].push(word);
    }
  })

  for (let num in anagramMap) {
    result.push(anagramMap[num]);
  }

  return result;
}

function computeAnagramNumber(str) {
  let chars = assignCharsToPrimes();
  let result = 1;
  for(let i = 0; i < str.length; i++){
    result *= chars[str[i]];
  }
  return result;
}

function assignCharsToPrimes(){
  let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101]
  let chars = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
  let zip = {};
  chars.forEach((char, index) => {
    zip[char] = primes[index]
  })
  return zip;
}


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
