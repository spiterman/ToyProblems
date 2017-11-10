const Vertex = require('./DataStructures/Graphs/Vertex');

class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(value) {
    this.vertices[value] = new Vertex(value);
  }
}

module.exports = Graph;
