const QuadNode = require('./QuadNode');
const Point = require('./Point');

class QuadTree {
  constructor(width, height, maxPointsPerNode) {
    this.maxPointsPerNode = maxPointsPerNode || 5;
    this.width = width;
    this.height = height;
    this.points = new Map();
    this.root = new QuadNode(0, width, 0, height);
    this.currentPoint = 0;
  }

  addPoint(point) {
    this.points.set(point.name, point);
    this.root.addPoint(point);
    this.currentPoint++;
  }

  addPoints(num) {
    while(num > 0) {
      let randomX = Math.random() * this.width;
      let randomY = Math.random() * this.height;
      let p = new Point(randomX, randomY, `Point ${this.currentPoint}`);
      this.addPoint(p);
      num--;
    }
  }
}

function distance(point1, point2) {
  return Math.sqrt(Math.pow(point1.x - point2.x, 2) + Math.pow(point1.y - point2.y, 2))
}

function intersecting(point1, point2) {
  return distance(point1, point2) < point1.radius + point2.radius ? true : false;
}

let p1 = new Point(50, 50)
let p2 = new Point(51, 49)
let p3 = new Point(10, 10)

// console.log(distance(p1, p2))

console.log(intersecting(p1, p2))
console.log(intersecting(p1, p3))

// console.log(qt)

// let qt = new QuadTree(100, 100, 5)

// qt.addPoints(10)

// console.log(qt.points.get('Point 0'))
// console.log(qt.points.get('Point 1'))
