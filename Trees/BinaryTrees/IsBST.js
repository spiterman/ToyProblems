// let test = require('./BSTNode')
class TreeNode {
  constructor(val){
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function isBST(root) {
  let result = true;

  function helper(node, min, max) {
    if(node === null) {
      return;
    }

    if(node.val <= min || node.val >= max) {
      result = false;
      return;
    }

    helper(node.left, min, node.val);
    helper(node.right, node.val, max);

  }

  helper(root, -Infinity, Infinity);

  return result;
}


let node4 = new TreeNode(4)
let node2 = new TreeNode(2)
let node6 = new TreeNode(6)
let node1 = new TreeNode(1)
let node3 = new TreeNode(3)
let node5 = new TreeNode(5)
let node7 = new TreeNode(7)

node4.left = node2;
node4.right = node6;
node2.left = node1;
node2.right = node3;
node6.left = node5;
node6.right = node7;

// let node8 = new TreeNode(8);




console.log(isBST(node4));
