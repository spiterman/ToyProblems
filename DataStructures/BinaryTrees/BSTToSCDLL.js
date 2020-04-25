class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let node7 = new Node(7);
let node3 = new Node(3);
let node1 = new Node(1);
let node2 = new Node(2);

node3.left = node1;
node1.right = node2;
node3.right = node7;


function makeCircular(root) {
  if(root === null) {
    return null;
  }
  let left = makeCircular(root.left);
  let right = makeCircular(root.right);
  root.left = root;
  root.right = root;
  return concatenate(concatenate(left, root), right);
}

function concatenate(leftList, rightList) {
  if(leftList === null) {
    return rightList;
  }
  if(rightList === null) {
    return leftList;
  }
  let leftLast = leftList.left;
  let rightLast = rightList.left;

  leftLast.right = rightList;
  rightList.left = leftLast;

  leftList.left = rightLast;
  rightLast.right = leftList;

  return leftList;
}

let head = makeCircular(node3)

let tail = head.left;
tail.right = null;
head.left = null;

let current = head;

while(current !== null) {
  console.log(current.val);
  current = current.right;
}

//Version 2
function convertBSTtoSCDLL(node) {
  if(node === null) {
    return null;
  }
  let left = node.left;
  let right = node.right;

  node.left = node;
  node.right = node;

  return mergeTwoLists(mergeTwoLists(convertBSTtoSCDLL(left), node), convertBSTtoSCDLL(right));

}

function mergeTwoLists(list1, list2) {
  if(list1 === null) {
    return list2;
  }
  if(list2 === null) {
    return list1;
  }

  let head1 = list1;
  let tail1 = list2.left;

  let head2 = list2;
  let tail2 = list2.left;

  head1.left = tail2;
  tail2.right = head1;

  tail1.right = head2;
  head2.left = tail1;

  return head1;
}

class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);
let node7 = new TreeNode(7);

node4.left = node2;
node2.left = node1;
node2.right = node3;
node4.right = node6;
node6.left = node5;
node6.right = node7;

let root = node4;

console.log(convertBSTtoSCDLL(root));
