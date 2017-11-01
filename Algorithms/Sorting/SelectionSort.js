function selectionSort(arr) {

  for(let i = 0; i < arr.length; i++) {
    let min = i;
    for(let j = i; j < arr.length; j++) {
      if(arr[j] < arr[min]) {
        min = j;
      }
    }
    [arr[min], arr[i]] = [arr[i], arr[min]];
  }
  return arr;
}

console.log(selectionSort([3, 2, 1, 6, 4, 8, 10, 39, 28, 57, 25]));

module.exports = selectionSort;
