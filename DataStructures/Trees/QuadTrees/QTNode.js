class QTNode {
  constructor(topLeft, topRight, bottomLeft, bottomRight) {
    this.topLeft = topLeft;
    this.topRight = topRight;
    this.bottomLeft = bottomLeft;
    this.bottomRight = bottomRight;
    this.storage = new Set();
  }
}

module.exports = QTNode;
