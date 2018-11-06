'use strict'

function createOneLetterDifferences(word) {
  let result = [];
  let letters = 'abcdefghijklmnopqrstuvwxyz';
  for(let i = 0; i < word.length; i++) {
    for(let j = 0; j < letters.length; j++) {
      let temp = word.split('');
      temp[i] = letters[j];
      temp = temp.join('');
      if(temp !== word) {
        result.push(temp);
      }
    }
  }
  return result;
}

function wordLadder(beginWord, endWord, wordList) {
  let map = {};

  // Solution B: O(N * K * 26) time
  // Part 1: Create a set with all words for constant lookup;
  map[beginWord] = [];
  for(let i = 0; i < wordList.length; i++) {
    map[wordList[i]] = [];
  }
  // Part 2: Generate all one letter differences of a given word
  // Loop through those words and add any that exist in the word set to
  // the edge list in map

  for(let word in map) {
    let differences = createOneLetterDifferences(word);
    for(let i = 0; i < differences.length; i++) {
      if(differences[i] in map) {
        map[word].push(differences[i]);
      }
    }
  }

  // Step 2: Traverse the graph using BFS
  let queue = [];
  let seen = {};

  queue.push([beginWord, 1]);
  seen[beginWord] = 1;

  while(queue.length > 0) {
    let current = queue.shift();
    let word = current[0];
    let count = current[1];
    let connections = map[word];
    for(let index = 0; index < connections.length; index++) {
      if(!seen[connections[index]]) {
        seen[connections[index]] = count + 1;
        queue.push([connections[index], count + 1]);
      }
    }
  }

  return seen[endWord] || 0;

}

console.log(wordLadder("hit", "cog", ["hot","dot","dog","lot","log","cog"]));
