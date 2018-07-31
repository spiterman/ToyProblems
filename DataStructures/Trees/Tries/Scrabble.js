const Trie = require("./Trie");
const fs = require("fs");

// const trie = require("./DictAsTrie");

Set.prototype.copy = function() {
  let result = new Set();
  this.forEach((item) => {
    result.add(item);
  });
  return result;
}


function Scrabble(dictionary, characters) {
  let trie = new Trie();
  trie.addWords(dictionary);
  console.log(trie)

//function Scrabble(characters) {

  let result = [];
  let currentWord = []

  function dfs(current, available) {
    currentWord.push(current.char);
    if(current.isWord){
      let word = currentWord.join("");
      result.push(word);
    }

    available.forEach(char => {
      if(current.children[char] !== undefined) {
        let remaining = available.copy();
        remaining.delete(char);
        dfs(current.children[char], remaining);
      }
    });
    currentWord.pop();
  }

  dfs(trie.root, new Set(characters));

  return result;
}

const dictionary = fs.readFileSync("./dictionary.txt").toString().split("\n");


let chars = ["t", "h", "e"];

console.log(Scrabble(dictionary, chars));
