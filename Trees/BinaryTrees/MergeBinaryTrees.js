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



function mergeTrees(node1, node2) {
  // Case 1: Neither is null
  if(node1 !== null && node2 !== null) {
    let newNode = new TreeNode(node1.val + node2.val);
    newNode.left = mergeTrees(node1.left, node2.left);
    newNode.right = mergeTrees(node1.right, node2.right);
    return newNode;
  }
  // Case 2: 1 or more is null
  if(node1 === null) {
    return copyTree(node2)
  }
  if(node2 === null) {
    return copyTree(node1);
  }
}

function copyTree(node) {
  if(node === null) {
    return null;
  }
  let newNode = new TreeNode(node.val);
  newNode.left = copyTree(node.left);
  newNode.right = copyTree(node.right);
  return newNode;
}

let root3 = mergeTrees(root1, root2);
