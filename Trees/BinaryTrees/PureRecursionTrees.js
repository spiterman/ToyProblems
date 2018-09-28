class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}


let root1 = new TreeNode(1)
root1.left = new TreeNode(3)
root1.right = new TreeNode(2)
root1.left.left = new TreeNode(5)
root1.left.left.right = new TreeNode(1)


let root2 = new TreeNode(2)
root2.left = new TreeNode(1)
root2.right = new TreeNode(3)
root2.left.right = new TreeNode(4)
root2.right.right = new TreeNode(7)

function traverseTree(node, callback) {
  if(node === null) {
    return null;
  }
  callback(node);
  traverseTree(node.left, callback)
  traverseTree(node.right, callback)
  return node;

}

function swap(node) {
  [node.left, node.right] = [node.right, node.left]
}

traverseTree(root3, swap)

traverseTree(root3, function(node) {
    console.log(node.val)
  })
