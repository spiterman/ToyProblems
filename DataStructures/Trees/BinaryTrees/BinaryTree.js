'use strict'
class Node {
  constructor(val){
    this.val = val;
    this.leftChild = null;
    this.rightChild = null;
  }
}

class BinarySearchTree {
  constructor(){
    this.root = null;
  }

  addChild(val){
    let tree = this;
    let newNode = new Node(val);

    function recurse(node){
      if(tree.root === null){
        tree.root = newNode;
      } else {
        if(val < node.val){
          if(node.leftChild === null){
            node.leftChild = newNode;
          } else {
            recurse(node.leftChild);
          }
        } else {
          if(node.rightChild === null){
            node.rightChild = newNode;
          } else {
            recurse(node.rightChild);
          }
        }
      }
    }
    recurse(tree.root)
  }
  contains(val){

  }
}

