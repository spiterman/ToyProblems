class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  addNode(val) {
    function dfs(node) {
      if(node === null) {
        return new TreeNode(val);
      }
      if(val >= node.val) {
        node.right = dfs(node.right);
      } else {
        node.left = dfs(node.left);
      }
      return node;
    }
    this.root = dfs(this.root);
  }
  addNodes(arr) {
    let tree = this;
    arr.forEach(val => {
      tree.addNode(val);
    })
  }
  forEachNode(callback) {
    function dfs(node) {
      if(node === null) return null;
      callback(node);
      dfs(node.left);
      dfs(node.right);
      return node;
    }
    dfs(this.root);
    return this;
  }

}

let tree = new BST()
tree.addNodes([4, 2, 6, 1, 3, 5, 7])

// console.log(JSON.stringify(tree, null, 1))
// tree.forEachNode(reverse);
// console.log("\n");
// console.log(JSON.stringify(tree, null, 1))



function square(node){
  node.val = node.val * node.val;
}

function print(node) {
  console.log(node.val);
}

function reverse(node) {
  [node.left, node.right] = [node.right, node.left];
}


tree.forEach(square).forEach(reverse).forEach(print)
