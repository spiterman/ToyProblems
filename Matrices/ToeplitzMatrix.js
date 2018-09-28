function isToeplitz(matrix) {
  for(let i = 0; i < matrix.length; i++) {
    if(!checkDiagonal(matrix, i, 0)){
      return false;
    }
  }

  for(let j = matrix.length; j > 0; j--) {
    if(!checkDiagonal(matrix, 0, j)) {
      return false;
    }
  }
  return true;
}


function checkDiagonal(matrix, col, row) {
  let element;
  while(col < matrix.length && row < matrix.length) {
    if (element !== undefined && matrix[row][col] !== element) {
       return false;
    }
      element = matrix[row][col];
      col++;
      row++;
  }
  return true;
}

// let test = [[3, 2, 1],
//             [1, 3, 2],
//             [2, 1, 3]];
//
// console.log(isToeplitz(test));

module.exports = isToeplitz;
