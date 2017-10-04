/*
  Write a function that swaps two elements in an array
*/

function Swap(arr, i, j){
  // ES5
  // var temp = arr[i];
  // arr[i] = arr[j];
  // arr[j] = temp;

  // ES6
  [arr[i], arr[j]] = [arr[j], arr[i]];
}

module.exports = Swap
