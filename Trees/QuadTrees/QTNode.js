class QTNode {
  constructor(coordinates, size) {
    this.topLeft = null;
    this.topRight = null;
    this.bottomLeft = null;
    this.bottomRight = null;

    this.coordinates = coordinates;
    this.size = size;
    this.storage = new Set();
  }
}

module.exports = QTNode;
