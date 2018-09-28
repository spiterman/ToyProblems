let test = [[1, 1, 0, 0, 0, 1],
            [0, 1, 0, 0, 0, 0],
            [1, 1, 0, 0, 0, 1],
            [0, 0, 1, 0, 1, 1]]

function numberOfIslandsDiagonals(matrix) {
  let seen = new Set();
  let islands = 0;

  function recurse(x, y) {
    if(x >= matrix.length || y >= matrix[0].length || x < 0 || y < 0 || matrix[x][y] === 0 || seen.has(`${x}.${y}`)) {
      return;
    }
    seen.add(`${x}.${y}`);
    recurse(x + 1, y)
    recurse(x - 1, y)
    recurse(x, y + 1)
    recurse(x, y - 1)
    recurse(x + 1, y + 1)
    recurse(x + 1, y - 1)
    recurse(x - 1, y + 1)
    recurse(x - 1, y - 1)
  }

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] === 1 && !seen.has(`${i}.${j}`)) {
        recurse(i, j);
        islands += 1;
      }
    }
  }

  return islands;
}

console.log(numberOfIslandsDiagonals(test));
