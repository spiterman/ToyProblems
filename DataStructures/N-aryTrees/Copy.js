class Node {
  constructor(value) {
    this.value = value;
    this.children = {}; //{<String>: <Node>}
  }
}

function copyTree(node) {
  let copy = new Node(node.value);
  for(let key in node.children) {
    copy.children[key] = copyTree(node.children[key]);
  }
  return copy;
}

let nodeA = new Node("A")
let nodeB = new Node("B")
let nodeC = new Node("C")
let nodeD = new Node("D")
let nodeE = new Node("E")
let nodeF = new Node("F")
let nodeG = new Node("G")
let nodeH = new Node("H")
let nodeI = new Node("I")

nodeA.children["B"] = nodeB;
nodeA.children["C"] = nodeC;
nodeA.children["D"] = nodeD;

nodeB.children["E"] = nodeE;
nodeB.children["F"] = nodeF;

nodeD.children["G"] = nodeG;
nodeD.children["H"] = nodeH;
nodeD.children["I"] = nodeI;


console.log(copyTree(nodeA))
