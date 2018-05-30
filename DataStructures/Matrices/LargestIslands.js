function largestIslands(matrix) {
  let result = 0;
  let seen = new Set();

  for(let i = 0; i < matrix.length; i++) {
    for(let j = 0; j < matrix[0].length; j++) {
      if(matrix[i][j] === 1 && !seen.has(`${i}.${j}`)) {
        dfs(i, j);
      }
    }
  }

  function dfs(x, y) {
    if(x < 0 ||
       y < 0 ||
       x >= matrix.length ||
       y >= matrix[0].length ||
       matrix[x][y] === 0 ||
       seen.has(`${x}.${y}`)) {
      return 0;
    }
    let size = 0;
    seen.add(`${x}.${y}`);
    size += dfs(x + 1, y);
    // size += dfs(x + 1, y + 1); // diagonal
    // size += dfs(x + 1, y - 1); // diagonal
    size += dfs(x - 1, y);
    // size += dfs(x - 1, y - 1); // diagonal
    size += dfs(x, y + 1);
    // size += dfs(x - 1, y + 1); // diagonal
    size += dfs(x, y - 1);

    size += 1;
    result = Math.max(result, size);
    return size;
  }

  console.log(seen)

  return result;
}

console.log(largestIslands(matrix))
