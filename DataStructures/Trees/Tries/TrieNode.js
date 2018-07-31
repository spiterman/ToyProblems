class TrieNode {
  constructor(char) {
    this.children = {};
    this.char = char;
    this.isWord = false;
  }
}

module.exports = TrieNode;
