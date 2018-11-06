/*
Write a method to evaluate a binary expression tree.  Include classes to represent the tree in your design.

As an example, the binary tree representation of the expression 6 + ( 6 / 2 ) would be:
     +
    / \
   6  '/'
      /   \
     "6"   "2"



Assume input is valid

Ints, all positives

Only division and addition

No divide by 0


Define a binary tree node class

Write a function that takes in the root node

Treat numbers as a base case

Otherwise there will be an evaluate sub expression

If a node corresponds to a number, return an integer version of that number

If it's an operator, return that operator applied to recursing left and right

*/

class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


function evaluateTree(node) {
    try {
      if(node === null) {
        throw "Error, invalid Tree"
      }

      if(node.val === "/") {
          return evaluateTree(node.left) / evaluateTree(node.right);
      }
      if(node.val === "+") {
        return evaluateTree(node.left) + evaluateTree(node.right);
      }
      return parseInt(node.val);

    } catch(e) {
        console.error(e)
    }
}


let node1 = new Node("+")
let node2 = new Node("6")
let node3 = new Node("/")
let node4 = new Node("6")
let node5 = new Node("2")

node1.left = node2
node1.right = node3
node3.left = node4
// node3.right = node5


evaluateTree(node1)
