class WeightedGraph {
  constructor() {
    this.edges = new Map();
  }
  addVertex(num) {
    if(!this.edges.get(num)) {
      this.edges.set(num, []);
      return true;
    }
    return false;
  }

  addEdge(v1, v2, w) { //O(E)
    if(!this.edges.get(v1) || !this.edges.get(v2) || w < 0) {
      return false;
    }
    let allConnections = this.edges.get(v1);
    let edge;
    allConnections.forEach((e) => {
      if(e[0] === v2) {
        edge = e;
      }
    })
    if(edge !== undefined) {
      edge[1] = w;
    } else {
      allConnections.push([v2, w]);
    }
  }

  minimumDistance(v1, v2) {
    let minDistances = {};
    this.edges.forEach((value, key) => {
      minDistances[key] = Infinity;
    })
    minDistances[v1] = 0;

    let g = this; //g === weighted graph instance

    function dfs(vertex, distance) {
      let edges = g.edges.get(Number(vertex));
      edges.forEach(e => {
        let totalDistance = distance + e[1]
        let node = e[0]
        if(totalDistance < minDistances[node]){
          minDistances[node] = totalDistance;
          dfs(node, totalDistance);
        }
      })
    }
    dfs(v1, 0)
    return minDistances[v2];
  }
}


/*
[[1, 2, 5],
 [2, 3, 6],
 [1, 3, 1]]
*/

let g = new WeightedGraph()

g.addVertex(1)
g.addVertex(2)
g.addVertex(3)
g.addVertex(4)
g.addVertex(5)
g.addVertex(6)

g.addEdge(1, 2, 5)
g.addEdge(1, 3, 1)
g.addEdge(1, 5, 8)
g.addEdge(3, 4, 2)
g.addEdge(4, 6, 4)
g.addEdge(6, 1, 7)
g.addEdge(2, 3, 2)
g.addEdge(4, 2, 1)
g.addEdge(2, 5, 2)
g.addEdge(5, 6, 3)

// g.addEdge(1, 3, 1)
// g.addEdge(1, 2, 10)

// console.log(g.edges)
console.log(g.minimumDistance(1, 6))

/*
{
  1: [[2, 10], [3, 1]]
  2: [[3, 6]]
  3: [];
}
   1
1 -----> 3
|       /
| 5    | 6
|      |
2 ------
*/
