
function isValidSudoku(grid) {
  if(grid.length !== 9 || grid[0].length !== 9) {
    return false;
  }
  // Check Rows
  for(let i = 0; i < grid.length; i++) {
    let nums = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
    for(let j = 0; j < grid[i].length; j++) {
      if(nums.has(grid[i][j])) {
        nums.delete(grid[i][j]);
      } else if(grid[i][j] !== 0){
        return false;
      }
    }
  }
  // Check Columns
  for(let i = 0; i < grid.length; i++) {
    let nums = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9])
    for(let j = 0; j < grid[i].length; j++) {
      if(nums.has(grid[j][i])) {
        nums.delete(grid[j][i]);
      } else if(grid[j][i] !== 0){
        return false;
      }
    }
  }

  // Check Quadrants
  for(let q = 0; q < 3; q++)  {
    for(let p = 0; p < 3; p++) {
      if(!checkQuadrant(grid, q, p)) {
        return false;
      }
    }
  }
  return true;
}

function checkQuadrant(grid, x, y) {
  let nums = new Set([1, 2, 3, 4, 5, 6, 7, 8, 9]);
  for(let i = 0; i < 3; i++) {
    for(let j = 0; j < 3; j++) {
      if(nums.has(grid[3 * x + i][3 * y + j])) {
        nums.delete(grid[3 * x + i][3 * y + j]);
      } else if(grid[3 * x + i][3 * y + j] !== 0){
        return false;
      }
    }
  }
  return true;
}


let grid =
 [[5, 3, 0, 0, 7, 0, 0, 0, 0],
  [6, 0, 0, 1, 9, 5, 0, 0, 0],
  [0, 9, 8, 0, 0, 0, 0, 6, 0],
  [8, 0, 0, 0, 6, 0, 0, 0, 3],
  [4, 0, 0, 8, 0, 3, 0, 0, 1],
  [7, 0, 0, 0, 2, 0, 0, 0, 6],
  [0, 6, 0, 0, 0, 0, 2, 8, 0],
  [0, 0, 0, 4, 1, 9, 0, 0, 5],
  [0, 0, 0, 0, 8, 0, 0, 7, 9]];

isValidSudoku(grid)
