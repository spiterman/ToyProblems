class AVLNode {
  constructor(val) {
    this.val = val;
    this.height = 1;
    this.left = null;
    this.right = null;
  }
}

class AVLTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    let newNode = new AVLNode(val);
    let avl = this;

    function dfs(node) {
      if(node === null) {
        return newNode;
      }
      if(newNode.val < node.val) {
        node.left = dfs(node.left);
      }
      else {
        node.right = dfs(node.right);
      }

      let leftH = avl.getHeight(node.left);
      let rightH = avl.getHeight(node.right);

      node.height = Math.max(leftH, rightH) + 1;

      let balance = avl.getBalance(node);

      if(balance > 1 && val < node.left.val) {
        return avl.rotateRight(node);
      }

      if(balance < -1 && val > node.right.val) {
        return avl.rotateLeft(node);
      }

      if(balance > 1 && val > node.left.val) {
        node.left = avl.rotateLeft(node.left);
        return avl.rotateRight(node);
      }

      if(balance < -1 && val < node.right.val) {
        node.right = avl.rotateRight(node.right)
        return avl.rotateLeft(node);
      }

      return node;
    }

    this.root = dfs(this.root);
  }

  insertMany(vals) {
    let avl = this;
    vals.forEach((val) =>{
      avl.insert(val);
    })
  }

  rotateLeft(node) {
    let avl = this;
    let newRoot = node.right;
    let nodeLeft = newRoot.left;

    newRoot.left = node;
    node.right = nodeLeft;

    node.height = 1 + Math.max(avl.getHeight(node.left), avl.getHeight(node.right));
    newRoot.height = 1 + Math.max(avl.getHeight(newRoot.left), avl.getHeight(newRoot.right));
    return newRoot;
  }

  rotateRight(node) {
    let avl = this;
    let newRoot = node.left;
    let nodeRight = newRoot.right;

    newRoot.right = node;
    node.left = nodeRight;

    node.height = 1 + Math.max(avl.getHeight(node.left), avl.getHeight(node.right));
    newRoot.height = 1 + Math.max(avl.getHeight(newRoot.left), avl.getHeight(newRoot.right));
    return newRoot;
  }

  getBalance(node) {
    if(node === null) return 0;
    return this.getHeight(node.left) - this.getHeight(node.right);
  }

  getHeight(node) {
    if(node === null) {
      return 0;
    }
    return node.height;
  }

}


let avl = new AVLTree();

avl.insertMany([1, 2, 3, 6, 5, -2, -5, -8])
// avl.insertMany([1, 2, 3])

console.log(JSON.stringify(avl, null, 1))
