// Heap Methods
function getParentIndex(index) {
  if(index === 0) {
    return 0;
  }
  if(index % 2 === 0) {
    return (index - 2)/2;
  }
  return (index - 1)/2;
}

function bubbleUp(heap) {
  let currentIndex = heap.length - 1;
  let current = heap[currentIndex];
  let parentIndex = getParentIndex(currentIndex);
  let parent = heap[parentIndex];


  while(current[1] < parent[1]) {
    // Swap both elements
    [heap[currentIndex], heap[parentIndex]] = [heap[parentIndex], heap[currentIndex]]
    // Reassign currentIndex, parentIndex, and parent
    currentIndex = parentIndex;
    parentIndex = getParentIndex(currentIndex);
    parent = heap[parentIndex];
  }
}

function addToHeap(heap, element) {
  // Push new element to the end
  heap.push(element);
  // Bubble it Up
  bubbleUp(heap);
}

function getChildIndices(index) {
  return [(2 * index) + 1, (2 * index) + 2];
}

function bubbleDown(heap) {
  let currentIndex = 0
  let current = heap[currentIndex];
  let childIndices = getChildIndices(currentIndex);

  let leftIndex = childIndices[0]
  let rightIndex = childIndices[1]

  // Given two indices in a heap, return the one with the smaller of two
  // or return undefined
  let minChildIndex = findMinChildIndex(heap, leftIndex, rightIndex)
  let minChild = minChildIndex === undefined ? undefined : heap[minChildIndex];

  while(minChild !== undefined && current[1] > minChild[1]) {
    // Swap minChild and
    [heap[currentIndex], heap[minChildIndex]] = [heap[minChildIndex], heap[currentIndex]];

    // Current Index becomes min child's index
    currentIndex = minChildIndex;

    // Get new left and right child indices
    [leftIndex, rightIndex] = getChildIndices(currentIndex);

    // New Min Child Index
    minChildIndex = findMinChildIndex(heap, leftIndex, rightIndex);

    // New min Child
    minChild = minChildIndex === undefined ? undefined : heap[minChildIndex];
  }

}

function findMinChildIndex(heap, leftIndex, rightIndex) {
  let minChildIndex;
  let leftChild = heap[leftIndex]
  let rightChild = heap[rightIndex]

  // If Left child is not undefined undefined,
  if(leftChild !== undefined) {
    // And the rightChild is undefined
    if(rightChild === undefined) {
      // That means there is only one option
      minChildIndex = leftIndex;
    } else {
      // Otherwise choose the smaller of the two
      minChildIndex = rightChild[1] < leftChild[1] ? rightIndex : leftIndex;
    }
  }

  // Returns undefined if there are no children
  return minChildIndex;
}

function removeMin(heap) {
  // Swap first and last element
  [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];

  // Remove Last element
  let min = heap.pop();

  // BubbleDown
  bubbleDown(heap);

  // Return Smallest element
  return min;
}



// let test = [['b', 20], ['c', 3], ['d', 4]]
//
// addToHeap(test, ['a', 1]);
// console.log(test)
//

// let test = [['a', 20]]
// removeMin(test);
//
// console.log(test)
