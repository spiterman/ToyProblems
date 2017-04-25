function DiagonalDifference(matrix) {
    var firstDiagonal = 0;
    var secondDiagonal = 0;

    for(var index = 0; index < matrix.length; index++){
        firstDiagonal += matrix[index][index];
        secondDiagonal += matrix[index][matrix.length - 1 - index];
    }

    return Math.abs(firstDiagonal - secondDiagonal);
}


console.log(DiagonalDifference([[11, 2, 4],[4, 5, 6],
[10, 8, -12]]))

