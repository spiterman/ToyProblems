function createNode(n){
  this.val = n;
}

// function generateConnectivityMatrix(mat){

// }

function generateStateVector(lst){
  return lst.map((item) => new createNode(item));
}


function updateStateVector(matrix, vector){

  var columnIndex = 0, rowIndex = 0;
  var result = new Array(matrix.length).fill(0);

  vector.forEach((item) => {
    if(item.val) {
      for(rowIndex; rowIndex < matrix.length; rowIndex++){
        if(matrix[rowIndex][columnIndex]){
          result[rowIndex] = 1;
        }
      }
    }
    columnIndex++;
  })

  return generateStateVector(result);
}

//Tests
var a = [
  [0, 1, 0, 0],
  [0, 0, 1, 0],
  [1, 0, 0, 0],
  [0, 1, 0, 0]
  ];

var v = generateStateVector([1, 0, 0, 0]);
console.log(v);
var w = updateStateVector(a, v);
console.log(w);
var x = updateStateVector(a, w);
console.log(x);
var y = updateStateVector(a, x);
console.log(y);
var z = updateStateVector(a, y);
console.log(z)
