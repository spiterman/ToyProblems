class FibHeapNode {
  constructor(key) {
    this.key = key;
    this.isLoser = false;
    this.parentNode = null;
    this.rightSibling = null;
    this.leftSibling = null;
    this.child = null;
    this.degree = 0;
  }
}
