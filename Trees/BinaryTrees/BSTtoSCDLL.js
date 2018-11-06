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
