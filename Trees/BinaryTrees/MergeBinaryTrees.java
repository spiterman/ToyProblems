class Main {
  public static void main(String[] args) {
    System.out.println("Hello world!");
    TreeNode test1 = new TreeNode(1);
    TreeNode test2 = new TreeNode(2);
    TreeNode test3 = TreeMethods.mergeTrees(test1, test2);
    System.out.println(test3.val);
  }
}

class TreeNode {
  public TreeNode left = null;
  public TreeNode right = null;
  public Integer val;

  public TreeNode(int val) {
    this.val = val;
  }
}

class TreeMethods {
  public static TreeNode copyTree(TreeNode node) {
    if(node == null) {
      return null;
    }
    TreeNode newNode = new TreeNode(node.val);
    newNode.left = copyTree(node.left);
    newNode.right = copyTree(node.right);
    return newNode;
  }

  public static TreeNode mergeTrees(TreeNode node1, TreeNode node2) {
  // Case 1: Neither is null
    if(node1 != null && node2 != null) {
      TreeNode newNode = new TreeNode(node1.val + node2.val);
      newNode.left = mergeTrees(node1.left, node2.left);
      newNode.right = mergeTrees(node1.right, node2.right);
      return newNode;
    }
    // Case 2: 1 or more is null
    if(node1 == null) {
      return copyTree(node2);
    }
    if(node2 == null) {
      return copyTree(node1);
    }
    return node1;
  }
}
