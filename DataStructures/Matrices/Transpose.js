/*
Given a matrix return its transpose:

Example:

Input:
[[1, 2],
 [4, 5],
 [7, 8]]

Output:
[[1, 4, 7],
 [2, 5, 8]]


*/


function Transpose(matrix) {
  let result = [];
  for(let i = 0; i < matrix[0].length; i++) {
    let newRow = [];
    for(let j = 0; j < matrix.length; j++) {
      newRow.push(matrix[j][i]);
    }
    result.push(newRow);
  }
  return result;
}

console.log(Transpose(
[[1, 2],
 [4, 5],
 [7, 8]]));

 console.log(Transpose(
 [[1, 0, 0],
  [0, 1, 0]]));

module.exports = Transpose;
