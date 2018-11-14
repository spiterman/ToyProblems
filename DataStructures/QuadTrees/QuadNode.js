const Point = require("./Point")

class QuadNode {
  constructor(xMin, xMax, yMin, yMax, maxPointsPerNode) {
    this.maxPointsPerNode = maxPointsPerNode || 5;

    this.bottomLeftChild = null;
    this.bottomRightChild = null;
    this.topLeftChild = null;
    this.topRightChild = null;

    this.xMin = xMin;
    this.xMax = xMax;
    this.yMin = yMin;
    this.yMax = yMax;

    this.isLeaf = true;
    this.size = 0;
    this.storage = new Set();
  }

  containsPoint(point) {
    let {x, y} = point;
    if(x < this.xMin || x >= this.xMax) return false;
    if(y < this.yMin || y >= this.yMax) return false;
    return true;
  }

  addPoint(point) {
    if(this.containsPoint(point)) {
      this.storage.add(point);
      this.size++;
      this.split();
      return true;
    }
    return false;
  }


  split() {
    if(this.size > this.maxPointsPerNode) {
      this.isLeaf = false;
      this.size = 0;

      this.bottomLeftChild = new QuadNode(xMin, (xMin + xMax)/2, ymin, (yMin + yMax)/2);
      this.bottomRightChild = new QuadNode((xMin + xMax)/2, xMax, (yMin + yMax)/2, max);
      this.topLeftChild = new QuadNode((xMin + xMax)/2, xMax, ymin, (yMin + yMax)/2);
      this.topRightChild = new QuadNode((xMin + xMax)/2, xMax, (yMin + yMax)/2, max);

      let parent = this;

      this.storage.forEach(point => {
        parent.bottomLeftChild.addPoint(point)
        parent.bottomRightChild.addPoint(point)
        parent.topLeftChild.addPoint(point)
        parent.topRightChild.addPoint(point)
      })

      this.storage = new Set();
      return true;
    }
    return false;
  }


  deletePoint(point) {
    this.storage.delete(point);
    this.size--;
    this.consolidate();
  }


  getPoints() {
    return this.storage;
  }

  consolidate() {
    if(this.isLeaf) return false;

    let parent = this;

    let children = {
      bl: this.bottomLeftChild,
      br: this.bottomRightChild,
      tl: this.topLeftChild,
      tr: this.topRightChild,
    }

    for(let child in children) {
      children[child].getPoints().forEach(p => {
        parent.add(p);
      })
      children[child] = null;
    }

    parent.isLeaf = true;
  }
}

module.exports = QuadNode;
