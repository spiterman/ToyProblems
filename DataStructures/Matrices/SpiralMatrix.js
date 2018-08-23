function spiralMatrix(n) {
  let matrix = [];
  for(let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0));
  }

  let topRow = 0;
  let rightColumn = n - 1;
  let bottomRow = n - 1;
  let leftColumn = 0;

  let currentNumber = 1;

  while(topRow <= bottomRow && leftColumn <= rightColumn) {
    for(let i = leftColumn; i <= rightColumn; i++) {
      matrix[topRow][i] = currentNumber;
      currentNumber++;
    }
    topRow++;

    for(let i = topRow; i <= bottomRow; i++) {
      matrix[i][rightColumn] = currentNumber;
      currentNumber++;
    }

    rightColumn--;

    for(let i = rightColumn; i >= leftColumn; i--) {
      matrix[bottomRow][i] = currentNumber;
      currentNumber++;
    }

    bottomRow--;

    for(let i = bottomRow; i >= topRow; i--) {
      matrix[i][leftColumn] = currentNumber;
      currentNumber++;
    }

    leftColumn++;

  }

  return matrix;
}

console.log(spiralMatrix(3))
