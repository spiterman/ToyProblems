function findAnagrams(s, p) {
  let result = [];
  let letterCount = {};
  let start = 0;
  let end = 0;

  for(let i = 0; i < p.length; i++) {
    p[i] in letterCount ? letterCount[p[i]] ++: letterCount[p[i]] = 1;
  }

  let seen = {};

  while(start < s.length) {

    let letter = s[end];
    let oldLetter = s[start];

    if(objShallowEqual(seen, letterCount)) {
      result.push(start);
      seen[oldLetter]--;
      start++;
    }

    if(letterCount[letter] === undefined) {
      end++;
      start = end;
      seen = {};
    }

    if(letterCount[letter] !== undefined) {
      if(seen[letter] === undefined) {
        seen[letter] = 1;
      }
      else if(seen[letter] < letterCount[letter]) {
        seen[letter]++;
      }
      else {
        seen[letter]++;
        while(seen[letter] > letterCount[letter]) {
          let oldLetter = s[start];
          if(seen[oldLetter] !== undefined ) {
            seen[oldLetter]--;
          }
          start++;
        }
      }
      end++;
    }
  }
  return result;
}



function objShallowEqual(obj1, obj2) {
  if(Object.keys(obj1).length !== Object.keys(obj2).length ) {
    return false;
  }
  for(let k in obj1) {
    if(!(k in obj2) || obj1[k] !== obj2[k]) {
      return false
    }
  }
  return true;
}

// console.log(findAnagrams("baa", "aa"))
// console.log(findAnagrams("abab", "ab"));

module.exports = findAnagrams;
