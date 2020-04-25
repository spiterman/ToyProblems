//https://leetcode.com/problems/binary-tree-paths/submissions/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let paths = [];
    let currentPath = [];

    function dfs(node) {
        if (node == null) {
            return;
        }
        currentPath.push(node.val)
        if(node.left === null && node.right === null) {
            paths.push(generatePath(currentPath));
        }
        dfs(node.left);
        dfs(node.right);
        currentPath.pop();
    }

    dfs(root);

    return paths;
};

function generatePath(arr) {
    return arr.join("->")
}

// console.log(generatePath([1, 2, 3]))
