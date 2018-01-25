let TreeNode = require("./DataStructures/Trees/BinaryTrees/TreeNode");
let TreeEach = require("./DataStructures/Trees/BinaryTrees/TreeEach");

function TreeMapValues(node, cb) {
  function recurse(current) {
    if(current === null) {
      return null;
    }
    let newNode = new TreeNode(cb(current.val));
    newNode.left = recurse(current.left);
    newNode.right = recurse(current.right);
    return newNode;
  }
  return recurse(node);
}
//
// function copy(val) {
//   return val;
// }
//
// function square(val) {
//   return val * val;
// }
//
// function reverse(node) {
//   [node.left, node.right] = [node.right, node.left]
// }
//
// function print(node) {
//   console.log(node.val)
// }

// let node1 = new TreeNode(1)
// let node2 = new TreeNode(2)
// let node3 = new TreeNode(3)
// let node4 = new TreeNode(4)
// let node5 = new TreeNode(5)
// let node6 = new TreeNode(6)
// let node7 = new TreeNode(7)
//
// node4.left = node2
// node2.left = node1
// node2.right = node3
// node4.right = node6
// node6.left = node5
// node6.right = node7
//
// console.log("Squared copy")
// TreeEach(TreeEach(TreeMapValues(node4, square), reverse), print)
// console.log("Original Tree")
// TreeEach(node4, print)
