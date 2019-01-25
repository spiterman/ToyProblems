function dfs(graph,start) {
  let result = [];
  let seen = new Set();
  let stack = [];

  stack.push(start);
  // seen.add(start);

  while(stack.length) {
    let current = stack.pop();
    let neighbors = graph[current];

    if(!seen.has(current)) {
      result.push(current);
      seen.add(current);
    }

    neighbors.forEach(n => {
      if(!seen.has(n)) {
        stack.push(n);
      }
    })
  }

  return result;
}

let graph = {
  "1": ["8"],
  "8": ["1", "9", "3"],
  "3": ["8", "5", "2"],
  "5": ["3"],
  "2": ["3", "9"],
  "9": ["8", "2"]
}

dfs(graph, "1");
