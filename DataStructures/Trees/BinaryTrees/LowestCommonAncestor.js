class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// function LowestCommonAncestor (root, num1, num2) {
//   let result = -1;
//
//   function ancestorPath (node, target, path) {
//     if(node === null) {
//       return null;
//     }
//     if(node.value === target) {
//       path.push(node.value);
//       return path;
//     }
//     if(!(ancestorPath(node.left, target, path) === null)) {
//       path.push(node.value);
//       return path;
//     }
//     if(!(ancestorPath(node.right, target, path) === null)) {
//       path.push(node.value);
//       return path;
//     }
//   }
//
//   let arr1 = ancestorPath(root, num1, []) || [];
//   let arr2 = ancestorPath(root, num2, []) || [];
//
//   arr1.reverse();
//   arr2.reverse();
//
//
//   let i = 0;
//
//   while(arr1[i] === arr2[i]) {
//     result = arr1[i];
//     i++;
//   }
//
//   return result;
// }



function LowestCommonAncestor (root, num1, num2) {
  let result = -1;

  let arr1 = [];
  let arr2 = [];

  let path = [];

  function ancestorPath (node) {
    if(node === null) {
      return;
    }
    path.push(node.value);

    if(node.value === num1) {
      arr1 = path.slice();
    }

    if(node.value === num2) {
      arr2 = path.slice();
    }

    ancestorPath(node.left);
    ancestorPath(node.right);
    path.pop();
  }

  ancestorPath(root);


  let i = 0;

  while(arr1[i] === arr2[i]) {
    result = arr1[i];
    i++;
  }

  return result;
}

// Tests
const five = new TreeNode(5);
const two = new TreeNode(2);
const seven = new TreeNode(7);
const four = new TreeNode(4);
const eight = new TreeNode(8);
const nine = new TreeNode(9);


five.left = two;
five.right = seven;
seven.left = four;
seven.right = eight;
eight.right = nine;

console.log(LowestCommonAncestor(five, 2, 7))


function LCA2(root, target1, target2) {
  if(root == null) {
    return null;
  }
  if(root.value == target1 || root.value == target2) {
    return root;
  }
  var left = LCA2(root.left, target1, target2);
  var right = LCA2(root.right, target1, target2);

  if(left != null && right != null) {
    return root;
  }
  return left == null? right : left;
}
// 
// var parent = LCA2(five, 2, 9)
// console.log("result2: " + parent.value);


module.exports = LowestCommonAncestor;
