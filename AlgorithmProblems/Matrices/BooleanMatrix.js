/*
Find 0’s in Boolean Matrix
Given a matrix with N rows and N columns where elements in the matrix can be either 1 or 0 and each row and column are sorted in ascending order, find the number of 0’s.

Input: Matrix of elements with values either 0 or 1
Output: An integer which is the count of all 0’s in the matrix
*/


function CountOnes(matrix) {
  let column = matrix[0].length - 1;
  let sum = 0;
  for(let row = 0; row < matrix.length; row++){
    while(matrix[row][column] === 1){
      sum += (matrix.length - row);
      column--;
    }
  }
  return sum;
}

// Tests
console.log(CountOnes([[0,0,1],[0,1,1],[1,1,1]]));
// 6
console.log(CountOnes([[1,1,1],[1,1,1],[1,1,1]]));
// 9
console.log(CountOnes([[0,0,1],[0,0,1],[0,0,1]]));
// 3

module.exports = CountOnes;
