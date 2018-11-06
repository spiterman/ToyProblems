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


  minDistanceEfficient(v1, v2) {
    let minDistances = {};
    this.edges.forEach((value, key) => {
      minDistances[key] = Infinity;
    })

    let heap = [];
    heap.push([v1, 0]);

    let g = this; //reference to the graph instance

    while(heap.length > 0) {
      let [vertex, distance] = removeMin(heap);

      // Only proceed from a vertex if the distance to arrive there is the new shortes
      if(distance <= minDistances[vertex]) {
        minDistances[vertex] = distance;
        let edges = g.edges.get(vertex);

        edges.forEach(e => {
          let neighbor = e[0];
          let totalDistance = e[1] + distance;
          if(totalDistance < minDistances[neighbor]) {
            minDistances[neighbor] = totalDistance;
            addToHeap(heap, [neighbor, totalDistance])
          }
        })
      }
    }

    return minDistances;
  }
}

// Heap Methods
function getParentIndex(index) {
  if(index === 0) {
    return 0;
  }
  if(index % 2 === 0) {
    return (index - 2)/2;
  }
  return (index - 1)/2;
}

function bubbleUp(heap) {
  let currentIndex = heap.length - 1;
  let current = heap[currentIndex];
  let parentIndex = getParentIndex(currentIndex);
  let parent = heap[parentIndex];


  while(current[1] < parent[1]) {
    // Swap both elements
    [heap[currentIndex], heap[parentIndex]] = [heap[parentIndex], heap[currentIndex]]
    // Reassign currentIndex, parentIndex, and parent
    currentIndex = parentIndex;
    parentIndex = getParentIndex(currentIndex);
    parent = heap[parentIndex];
  }
}

function addToHeap(heap, element) {
  // Push new element to the end
  heap.push(element);
  // Bubble it Up
  bubbleUp(heap);
}

function getChildIndices(index) {
  return [(2 * index) + 1, (2 * index) + 2];
}

function bubbleDown(heap) {
  let currentIndex = 0
  let current = heap[currentIndex];
  let childIndices = getChildIndices(currentIndex);

  let leftIndex = childIndices[0]
  let rightIndex = childIndices[1]

  // Given two indices in a heap, return the one with the smaller of two
  // or return undefined
  let minChildIndex = findMinChildIndex(heap, leftIndex, rightIndex)
  let minChild = minChildIndex === undefined ? undefined : heap[minChildIndex];

  while(minChild !== undefined && current[1] > minChild[1]) {
    // Swap minChild and
    [heap[currentIndex], heap[minChildIndex]] = [heap[minChildIndex], heap[currentIndex]];

    // Current Index becomes min child's index
    currentIndex = minChildIndex;

    // Get new left and right child indices
    [leftIndex, rightIndex] = getChildIndices(currentIndex);

    // New Min Child Index
    minChildIndex = findMinChildIndex(heap, leftIndex, rightIndex);

    // New min Child
    minChild = minChildIndex === undefined ? undefined : heap[minChildIndex];
  }

}

function findMinChildIndex(heap, leftIndex, rightIndex) {
  let minChildIndex;
  let leftChild = heap[leftIndex]
  let rightChild = heap[rightIndex]

  // If Left child is not undefined undefined,
  if(leftChild !== undefined) {
    // And the rightChild is undefined
    if(rightChild === undefined) {
      // That means there is only one option
      minChildIndex = leftIndex;
    } else {
      // Otherwise choose the smaller of the two
      minChildIndex = rightChild[1] < leftChild[1] ? rightIndex : leftIndex;
    }
  }

  // Returns undefined if there are no children
  return minChildIndex;
}

function removeMin(heap) {
  // Swap first and last element
  [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];

  // Remove Last element
  let min = heap.pop();

  // BubbleDown
  bubbleDown(heap);

  // Return Smallest element
  return min;
}



let g = new WeightedGraph()

g.addVertex(1)
g.addVertex(2)
g.addVertex(3)
g.addVertex(4)
g.addVertex(5)
g.addVertex(6)

// Make undirected Graph

g.addEdge(1, 6, 14)
g.addEdge(6, 1, 14)

g.addEdge(1, 2, 7)
g.addEdge(2, 1, 7)

g.addEdge(1, 3, 9)
g.addEdge(3, 1, 9)

g.addEdge(2, 3, 10)
g.addEdge(3, 2, 10)

g.addEdge(2, 4, 15)
g.addEdge(4, 2, 15)

g.addEdge(3, 4, 11)
g.addEdge(4, 3, 11)

g.addEdge(3, 6, 2)
g.addEdge(6, 3, 2)

g.addEdge(4, 5, 6)
g.addEdge(5, 4, 6)

g.addEdge(6, 5, 9)
g.addEdge(5, 6, 9)


console.log(g.minDistanceEfficient(1, 5))
