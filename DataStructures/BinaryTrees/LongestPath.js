function bstNode (value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

function LongestPath(root){
  let result = 0;

  function dfs(current, depth){
    if(depth > result) { result = depth;}
    if(current === null) return;
    dfs(current.left, depth+1);
    dfs(current.right,depth+1);
  }

  dfs(root, 0);
  return result;
}


// let root = new bstNode(1);
// root.left = new bstNode(2)
// root.right = new bstNode(3);
// root.right.right = new bstNode(4);
//
// console.log(LongestPath(root));

module.exports = LongestPath;
