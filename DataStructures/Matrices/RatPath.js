function ratPath(matrix) {
  let path = [];

  function traverse(x, y) {
    if(x > matrix[0].length || y > matrix.length) {
      return;
    }
    if(x === matrix[0].length - 1 && y === matrix.length - 1) {
      path.push([x, y]);
      return true;
    }

    if(traverse(x + 1, y)) {
      path.push([x, y]);
      return true;
    }
    if(traverse(x, y + 1)) {
      path.push([x, y]);
      return true;
    }
  }
  traverse(0,0);

  return path.reverse();
}

// let matrix = [[0, 0, 0, 1],
// 		[0, 1, 0, 1],
// 		[0, 1, 0, 0],
// 		[0, 0, 1, 0]];

// Expect
// [[0, 0], [0, 1], [0, 2], [1, 2], [2, 2], [2, 3], [3, 3]]


// console.log(ratPath(matrix));


module.exports = ratPath;
