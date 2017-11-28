'use strict';

function oneDifference(word1, word2) {
  let differences = 0;

  for(let i = 0; i < word1.length; i++) {
    if(word1[i] !== word2[i]) {
      differences++;
    }
    if(differences > 1 || word1 === word2) {
      return false;
    }
  }
  return true;
}

function wordLadder(beginWord, endWord, wordList) {
  let map = {};
  for(let i = -1; i < wordList.length; i++) {
    let word;
    if(i === -1){
      word = beginWord;
    } else {
      word = wordList[i];
    }

    map[word] = [];

    for(let j = 0; j < wordList.length; j++) {
      if(oneDifference(word, wordList[j])) {
        map[word].push(wordList[j]);
      }
    }
  }

  return map;
}

// console.log(wordLadder("hit", "cog", ["hot","dot","dog","lot","log","cog"]));

module.exports = wordLadder;
