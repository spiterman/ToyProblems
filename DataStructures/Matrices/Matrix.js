function Matrix(rows, columns, fill) {
  this.data = [];

  if(fill === undefined){
    fill = 0;
  }

  var row = [];
  for(var i = 0; i < columns; i++){
    row.push(fill);
  }
  for(var j = 0; j < rows; j++){
    this.data.push(row.slice())
  }
}

Matrix.prototype.insert = function(row, column, value){
  this.data[row][column] = value;
}



var m = new Matrix(3, 4);
m.insert(1, 1, 10);

console.log(JSON.stringify(m.data))
