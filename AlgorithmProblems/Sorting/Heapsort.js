/*
Heapsort in place
Time Complexity: O(N log N)
Space Complexity: O(1)
*/

function heapSort(arr) {
  let lastElement = arr.length;

  function getChild(parent) {
    let child1 = 2 * parent + 1;
    let child2 = 2 * parent + 2;

    if (child1 >= lastElement) {
      return child1;
    } else if (child2 >= lastElement) {
      return child1;
    } else if (arr[child1] > arr[child2]) {
      return child1;
    } else {
      return child2;
    }
  }

  function bubbleDown(parent) {
    let child = getChild(parent);

    while (child <= lastElement  && arr[parent] < arr[child]) {
      [arr[child], arr[parent]] = [arr[parent], arr[child]];
      parent = child;
      child = getChild(parent);
    }
  }

  let i = arr.length;
  while (i--) {
    bubbleDown(i);
  }

  lastElement--;
  while(lastElement >= 0) {
    [arr[0], arr[lastElement]] = [arr[lastElement], arr[0]]; //Swap
    lastElement--;
    bubbleDown(0);
  }
  return arr;
}

// console.log(heapSort([10, 4, 5, 1, 9, 6, 8, 9, 1]))

module.exports = heapSort;
