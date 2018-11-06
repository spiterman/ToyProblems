const TrieNode = require("./TrieNode");

class Trie {
  constructor() {
    this.root = new TrieNode("");
  }
  addWord(str) {
    let current = this.root;
    for(let i = 0; i < str.length; i++) {
      if(current.children[str[i]] === undefined) {
        current.children[str[i]] = new TrieNode(str[i]);
      }
      current = current.children[str[i]];
    }
    current.isWord = true;
  }

  addWords(arrOfWords) {
    let trie = this;
    arrOfWords.forEach(word => {
      trie.addWord(word);
    })
  }

  search(prefix){ //returns a node, or null
    let result = null;
    function dfs(current, index) {
      if(!(prefix[index] in current.children)){
        return;
      }
      if(index === prefix.length) {
        result = current;
        return;
      }
      dfs(current[prefix[index]], index + 1);
    }
    dfs(this.root, 0);
    return result;
  }

  getWords(prefix){ //returns an array of words
    let current = this.search(prefix);
  }

  isWord(str){ //returns true/false if word exists or not in trie

  }

  removeWord(str){ //removes the word from the trie

    function dfs(current, index) {
      if(!(str[index] in current.children)) {
        return;
      }
      if(index === str.length) {

      }
      dfs(current[str[index]], index + 1);
      if(current.children);
    }
  }

}


module.exports = Trie;
