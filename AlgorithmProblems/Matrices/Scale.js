/*
Write a function that takes in a constant and a matrix
and scales every element in that matrix by that constant
*/

function Scale(constant, matrix){
  for(var i = 0; i< matrix.length; i++){
    for(var j = 0; j<i.length; j++){
      matrix[i][j] = constant * matrix[i][j]
    }
  }
  return matrix;
}


module.exports = Scale;
