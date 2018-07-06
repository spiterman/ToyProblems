function stringChain(words) {
  let maxChain = 1;
  let setOfWords = new Set();

  words.forEach((word) => {
    setOfWords.add(word);
  });

  // Sort the words by length O(n * log(n))
  words.sort((a, b) => a.length < b.length)

  let seen = new Set();
  let queue = [];

  // Perform BFS from every word in the arry sorted by length
  for(let i = 0; i < words.length; i++) {

    if(!seen.has(words[i]) && words[i].length > maxChain) {

      queue.push([words[i], 1])
      seen.add(words[i]);

      while(queue.length > 0) {
        let currentItem = queue.shift();
        let [currentWord, distance] = [currentItem[0], currentItem[1]];

        maxChain = Math.max(distance, maxChain);

        let oneRemovals = generateAllOneRemovals(currentWord);
        oneRemovals.forEach((word) => {
          if(!seen.has(word) && setOfWords.has(word)) {
            queue.push([word, distance + 1]);
            seen.add(word);
          }
        })
      }
    }
  }
  return maxChain;
}

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


stringChain(["a", "b", "ba", "bca", "bda", "bdca"])

// console.log(generateAllOneRemovals("bdca"))
