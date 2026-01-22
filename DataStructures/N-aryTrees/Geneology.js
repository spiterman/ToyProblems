
let animalList = [
  // ["animal", "mammal"],
  // ["animal", "reptile"],
  ["dog", "poodle"],
  ["dog", "pomeranian"],
  ["feline", "cat"],
  ["cat", "persian"],
  ["canine", "dog"],
  ["canine", "wolf"],
  ["mammal", "feline"],
  ["mammal", "canine"],
  ["reptile", "crocodile"],
  ["feline", "jaguar"],
  ["reptile", "iguana"],
  ["feline", "lion"],
  ["mammal", "monotreme"],
  ["dog", "st bernard"],
  ["reptile", "turtle"]
];

class TreeNode {
  constructor(word) {
    this.word = word;
    this.children = {};
    this.parent = null;
  }

  addChild(treeNode) {
    this.children[treeNode.word] = treeNode;
    treeNode.parent = this;
  }
}

function generateTree(edgeList){
  let tree = {};

  edgeList.forEach((edge) => {
    let parentName = edge[0];
    let childName = edge[1];
    if(!(parentName in tree)){
      tree[parentName] = new TreeNode(parentName);
    }
    if(!(childName in tree)){
      tree[childName] = new TreeNode(childName);
    }

    let parentNode = tree[parentName];
    let childNode = tree[childName];
    parentNode.addChild(childNode);
  });

  return tree;
}

function findRoots(tree) {
  let roots = {};

  for(let name in tree) {
    let node = tree[name];
    if(node.parent === null){
      roots[name] = node;
    }
  }
  return roots;
}

function groupTreeByLevel(rootNode) {
  let levels = {};

  function depthFirstSearch(node, level) {
    if(levels[level] === undefined) {
      levels[level] = [];
    }
    levels[level].push(node.word);
    for(let childName in node.children) {
      let childNode = node.children[childName];
      depthFirstSearch(childNode, level + 1);
    }
  }

  depthFirstSearch(rootNode, 0);
  return levels;
}

function pickCrowdedLevel(levelList) {
  let maxLevel = 0;
  let currentLevel = 0;
  while(currentLevel in levelList) {
    let currentLength = levelList[currentLevel].length;
    let maxLength = levelList[maxLevel].length;
    if(currentLength > maxLength) {
      maxLevel = currentLevel;
    }
    currentLevel++;
  }
  return levelList[maxLevel];
}

function findMostCrowdedLevel(edgeList){
  let tree = generateTree(edgeList);
  let roots = findRoots(tree);
  let result = [];

  for(let name in roots) {
    let rootNode = roots[name];
    let groupedTree = groupTreeByLevel(rootNode);
    let mostCrowdedLevel = pickCrowdedLevel(groupedTree);
    if(mostCrowdedLevel.length > result.length) {
      result = mostCrowdedLevel;
    }
  }

  return result.sort();
}

console.log(findMostCrowdedLevel(animalList));
