/*
Write a function that given two matrices
return the matrix that results from multiplying them together
If the matrices are unable to be multipled throw an error

***Note***
The dimensions of the matrices need not be the same.
And the dimensions of the result need not equal the dimensions
of either input

*/

function Multiply(matrix1, matrix2){
  if(matrix1[0].length !== matrix2.length){
    throw "Cannot multiply matrices with given dimensions"
  }
  let result = []
  for(let row = 0; row < matrix1.length; row++) {
    let newRow = [];
    for(let column = 0; column < matrix2[0].length; column++) {
      let num = 0;
      for(let i = 0; i < matrix1[0].length; i++) {
        num += matrix1[row][i] * matrix2[i][column]
      }
      newRow.push(num);
    }
    result.push(newRow);
  }
  return result;
}

module.exports = Multiply;

// Tests
// console.log(Multiply([[1,1],[1,1],[1,1]], [[1,1,1],[1,1,1]]));
// console.log(Multiply([[1,1,1],[1,1,1]], [[1,1],[1,1],[1,1]]));
// console.log(Multiply([[1,1,1],[1,1,1]], [[1],[1],[1]]));
// console.log(Multiply([[1],[1],[1]], [[1,1,1]]));
// console.log(Multiply([[1,1,1]], [[1],[1],[1]]));
// console.log(Multiply([[1,1,1]], [[1],[1]]));
