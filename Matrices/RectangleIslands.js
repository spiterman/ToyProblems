// function rectangleIslands(matrix) {
//   let total = 0;
//
//   for(let i = 0; i < matrix.length; i++) {
//     for(let j = 0; j < matrix[i].length; j++) {
//       if(matrix[i][j] === 1 && ((i - 1) < 0 || matrix[i - 1][j] === 0) && ((j - 1) < 0 || matrix[i][j - 1] === 0) ) {
//         total++;
//       }
//     }
//   }
//   return total;
// }



// let matrix = [[1, 1, 1, 0],
//               [1, 1, 1, 0],
//               [1, 1, 1, 0],
//               [1, 1, 1, 0],
//               [0, 0, 0, 1]];
//
// console.log(rectangleIslands(matrix));

module.exports = rectangleIslands;
