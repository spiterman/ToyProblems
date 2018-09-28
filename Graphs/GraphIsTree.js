const Vertex = require('./DataStructures/Graphs/Vertex');

function graphIsTree(vertex) {
  let seen = new Set();
  let queue = [];
  let count;

  seen.add(vertex.value);
  queue.push(vertex);

  while(queue.length > 0) {
    let current = queue.shift();
    count = 0;

    for(let v in current.edges) {
      if(seen.has(v)) {
        count++;
      }
      if(count > 1) {
        return false;
      }
      if(!seen.has(v)) {
        seen.add(v);
        queue.push(current.edges[v]);
      }
    }
  }
  return true;
}

let a = new Vertex('a');
let b = new Vertex('b');
let c = new Vertex('c');
let d = new Vertex('d');

a.edges['b'] = b;
a.edges['c'] = c;


b.edges['a'] = a;
// b.edges['c'] = c;
// b.edges['d'] = d;

c.edges['a'] = a;
// c.edges['b'] = b;
// c.edges['d'] = d;

// d.edges['c'] = c;
// d.edges['b'] = b;

console.log(graphIsTree(a));
