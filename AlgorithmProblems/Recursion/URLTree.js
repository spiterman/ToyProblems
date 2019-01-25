let alist = ['/home/anti/xanax',
             '/home/heart/lipitor',
             '/home/heart/atova'
            ]

function createTree(paths) {
  paths = paths.map(url => {
    return url.split("/");
  })

  let tree = {};

  for(let i = 0; i < paths.length; i++) {
    let path = paths[i];
    let subdirectory = tree;

    for(let j = 1; j < path.length; j++) {
      let nextFolder = path[j];
      if(!(nextFolder in subdirectory)) {
        subdirectory[nextFolder] = {};
      }
      subdirectory = subdirectory[nextFolder]
    }
  }

  return tree;
}

function printTree(root) {

  function printNode(node, depth) {
    for(let subdirectory in node) {
      let whitespace = " ";
      whitespace = whitespace.repeat(depth);
      console.log(`${whitespace}- ${subdirectory}`);
      printNode(node[subdirectory], depth + 2)
    }
  }

  printNode(root, 0);
}

printTree(createTree(alist))
