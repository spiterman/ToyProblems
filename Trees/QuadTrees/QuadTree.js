const QTNode = require('./DataStructures/Trees/QuadTrees/QTNode');

class QuadTree {
  constructor(loadFactor, height, width) {
    this.loadFactor = loadFactor;
    this.root = new QTNode([0, 0], [0, width], [height, 0], [height, width]);
  }
}
