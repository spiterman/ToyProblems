class Point {
  constructor(x, y, name, radius) {
    this.x = x;
    this.y = y;
    this.name = name || "";
    this.radius = radius|| 3;
  }
}

module.exports = Point;
