function stringChain2(words) {
  let setOfWords = new Set(words); //O(N) adds all words to a set for O(1) lookup
  let seen = new Set(); // To keep track of graph
  let chains = {};
  let globalMax = 1;


  function dfs(word) { //O(N)
    if(word.length === 1) {
      chains[word] = 1;
      return 1;
    }
    if(chains[word] !== undefined) {
      return chains[word]
    }
    let maxChain = 1;
    let oneRemovals = generateAllOneRemovals(word);

    oneRemovals.forEach((w) => {
      if(setOfWords.has(w)) {
        maxChain = Math.max(dfs(w) + 1, maxChain);
      }
    })
    chains[word] = maxChain;
    globalMax = Math.max(maxChain, globalMax);
    return maxChain;
  }

  words.forEach((w) => {
    if(!seen.has(w)) {
      seen.add(w);
      dfs(w);
    }
  })

  // return chains; //Print to see all the chains for each word
  return globalMax;
}

let words = ["a", "b", "ba", "bca", "bda", "bdca", "xyzabc"];

function generateAllOneRemovals(word) {
  let result = [];
  for(let i = 0; i < word.length; i++) {
    let newWord = word.split("")
    newWord.splice(i, 1)
    newWord = newWord.join("");
    result.push(newWord);
  }
  return result;
}

console.log(stringChain2(words))
