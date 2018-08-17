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


  invertTree() {
    this.forEachNode(invert);
  }

  printTree() {
    this.forEachNode(print);
  }

  squareTree(){
    this.forEachNode(square)
  }



  reduce(reducer, startVal) { //Assumes Start Value
    function dfs(node, accumulator) {
      if(node === null) return accumulator;
      return reducer(node, dfs(node.left, accumulator), dfs(node.right, accumulator));
    }
    return dfs(this.root, startVal);
  }


  countNodes() {
    return this.reduce(count, 0)
  }

  sumTreeNodes() {
    return this.reduce(sum, 0)
  }

  height() {
    return this.reduce(height, 0)
  }

  width() {
    return this.reduce(rightWidth, 0) - this.reduce(leftWidth, 0) - 1
  }


  /*
  // Flexible Reduce, that does not need a start value passed in

  reduceFlexible(reducer, startVal) { //Does not assume start value
    function dfs(node, accumulator) {
      if(node === null) return accumulator;
      return reducer(node, dfs(node.left, accumulator), dfs(node.right, accumulator), accumulator);
    }
    if(startVal !== undefined) {
      return dfs(this.root, startVal);
    } else if(this.root !== null){
      return dfs(this.root, 0) // Or set startVal default to 0
      // return reducer(this.root, dfs(this.root.left, this.root.val), dfs(this.root.right, this.root.val), this.root.val)
    }
    return;
  }


  // Old way of implementing sum() and height()

    sum() {
      function dfs(node) {
        if(node === null) return 0;
        return node.val + dfs(node.left) + dfs(node.right);
      }
      return dfs(this.root)
    }


    height() {
      function dfs(node) {
        if (node === null) return 0;
        return Math.max(dfs(node.left), dfs(node.right)) + 1;
      }
      return dfs(this.root)
    }

  */
}


// Each Functions

function square(node){
  node.val = node.val * node.val;
}

function print(node) {
  console.log(node.val);
}

function reverse(node) {
  [node.left, node.right] = [node.right, node.left];
}


// Reduce Functions

function height(node, left, right) {
  return Math.max(left, right) + 1;
}

function count(node, left, right) {
  return 1 + left + right;
}

function sum(node, left, right) {
  return node.val + left + right;
}

function leftWidth(node, left, right) {
  return Math.min(left - 1, right + 1);
}

function rightWidth( node, left, right) {
  return Math.max(left - 1, right + 1);
}



let tree = new BST()
tree.addNodes([40, 20, 60, 10, 30, 50, 70, 29, 28, 26, 9, 8, 7, 25, 24, 23])



// tree.forEachNode(print).forEachNode(square).forEachNode(reverse).forEachNode(print);


console.log(tree.countNodes())
console.log(tree.sumTreeNodes())
console.log(tree.height())
console.log(tree.width())
