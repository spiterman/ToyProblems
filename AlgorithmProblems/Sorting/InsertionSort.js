function insertionSort(arr) {
  for(let i = 0; i < arr.length; i++) {
    let j = i;
    while(j >= 0 && arr[j-1] > arr[j]) {
      [arr[j], arr[j-1]] = [arr[j-1], arr[j]];
      j--;
    }
  }
  return arr;
}

// console.log(insertionSort([3, 2, 1, 6, 4, 8, 10, 39, 28, 57, 25]));

module.exports = insertionSort;
