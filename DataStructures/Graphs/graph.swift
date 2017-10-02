class NodeClass {
    var name: String
    var lon: Double
    var lat: Double
    var edges: [String: NodeClass]

    init(name: String, lon: Double, lat: Double) {
        self.name = name
        self.lon = lon
        self.lat = lat
        self.edges = [:]
    }
}

class GraphClass {
  var vertices: [String: NodeClass]

  init() {
    self.vertices = [:]
  }

  func addNode(name: String, lon: Double, lat: Double) {
    vertices[name] = NodeClass(name: name, lon: lon, lat: lat)
  }

  func removeNode(name: String) {
    vertices.removeValue(forKey: name)
  }

  func addEdge(node1: String, node2: String) {
    let n1 = vertices[node1]
    let n2 = vertices[node2]
    n1!.edges[node2] = n2
    n2!.edges[node1] = n1
  }

  func removeEdge(node1: String, node2: String) {
    let n1 = vertices[node1]
    let n2 = vertices[node2]
    n1!.edges.removeValue(forKey: node2)
    n2!.edges.removeValue(forKey: node1)
  }

  func shortestPath(node1: String, node2: String) -> Array<String> {

    // func traverse(currentNode: NodeClass, path: Array<String>) -> Array<String> {

    //   if currentNode!.name == node2 {
    //     return path.append(node2)
    //   }
    //   // if(path.count)
    //   print("hello")
    //   let a = [1, 2, 3]
    //   print(a.count)
    //   return []


    // }
    // traverse(currentNode: vertices[node1], path: [])

    return []
  }
}

// let n = NodeClass(name: "twin peaks", long: 1.10, lat: 1.302)

let g = GraphClass()
g.addNode(name: "twin peaks", lon: 1.12, lat: 1.302)
g.addNode(name: "abc", lon: 1.12, lat: 1.302)

// g.removeNode(name: "twin peaks")
// print(g.vertices)

let a = g.vertices["twin peaks"]
g.addEdge(node1: "twin peaks", node2: "abc")
// g.removeEdge(node1: "twin peaks", node2: "abc")

// print(a!.edges)
