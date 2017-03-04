function matrixMultiply(mat1, mat2){
  if(mat1[0].length !== mat2.length){
    return console.log("Cannot multiply matrices!");
  }

}

function matrixScaling(constant, matrix){
  for(var i = 0; i< matrix.length; i++){
    for(var j = 0; j<i.length; j++){
      matrix[i][j] = constant * matrix[i][j]
    }
  }
  return matrix;
}

matrixScaling

matrixMultiply([[1]], [1, 3])

var a = [[1, 0, 0],
     [0, 1, 0],
     [0, 0, 1]];

matrixScaling(2, a)
