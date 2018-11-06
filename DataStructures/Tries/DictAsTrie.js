const Trie = require("./Trie");
const fs = require("fs");

const dictionary = fs.readFileSync("./dictionary.txt").toString().split("\n");

let trie = new Trie();
trie.addWords(dictionary);

module.exports = trie;
