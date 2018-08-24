
// Space: O(NK) (Plus O(K) for the heap)
// Time: O(NK log(K))
function mergeKSorted(arrays) {
  let result = [];

  let minHeap = [];

  arrays.forEach((array, index) => {
    minHeap.push({
      arrayIndex: index,
      elementIndex: 0,
      value: array[0]
    });
  })

  // Heapify the minHeap O(K)
  heapify(minHeap);

  /*
  NOTE: Key Insight

  Each one of the K arrays will have one element in the heap at all times.

  One trick we're using is that once we've added all the elements from a given array
  to the result, we set the value property on its "node" in the heap to Infinity,
  so it bubbles down to the bottom.

  The goal here is to eventually fill the heap up with "nodes" with values of Infinity.

  Once the top node's value is Infinity, we break out of the while loop.
  */

  // Run every element in the arrays through the minHeap         O(NK log(K))

  // While the value at the top is not equal to infinity         O(N K) elements
    // Retrieve the top element in the heap                      O(1)
    // Insert value from top element into result                 O(1)
    // Increment the elementIndex                                O(1)
    // If the elementIndex is greater than the length of the array at arrayIndex:
      // Set the top's value to Infinity                         O(1)
    // Otherwise:
      // Update the value to reflect next element in the array   O(1)

    // Then bubble down the top element                          O(log(K)) for each element

    while(minHeap[0].value !== Infinity) {
      let top = minHeap[0]
      result.push(top.value);
      top.elementIndex += 1;
      if(top.elementIndex >= arrays[top.arrayIndex].length) {
        top.value = Infinity;
      } else {
        top.value = arrays[top.arrayIndex][top.elementIndex];
      }
      bubbleDown(minHeap, 0);
    }

  return result;
}





// Heap Helper functions
// NOTE A lot of these are very similar to the methods used on Djikstra's Algorithm on 07.26

// Simple formula for getting child indices
function getChildIndices(index) {
  return [(2 * index) + 1, (2 * index) + 2];
}

// Returns the index of the smaller child, or undefined if there are no children
function findMinChildIndex(minHeap, leftIndex, rightIndex) {
  let minChildIndex;
  let leftChild = minHeap[leftIndex];
  let rightChild = minHeap[rightIndex];

  if(leftChild !== undefined) {
    if(rightChild === undefined) {
      minChildIndex = leftIndex;
    } else {
      minChildIndex = rightChild.value < leftChild.value ? rightIndex : leftIndex;
    }
  }
  return minChildIndex;
}

// Takes in an index since we want to use it for heapify
// When removing the top, just pass in index 0

function bubbleDown(minHeap, index) {
  let currentIndex = index;
  let current = minHeap[currentIndex];
  let [leftIndex, rightIndex] = getChildIndices(currentIndex);
  let minChildIndex = findMinChildIndex(minHeap, leftIndex, rightIndex);
  let minChild = minChildIndex === undefined ? undefined : minHeap[minChildIndex];

  while(minChild !== undefined && current.value > minChild.value) {
    [minHeap[currentIndex], minHeap[minChildIndex]] = [minHeap[minChildIndex], minHeap[currentIndex]];

    currentIndex = minChildIndex;

    [leftIndex, rightIndex] = getChildIndices(currentIndex);

    minChildIndex = findMinChildIndex(minHeap, leftIndex, rightIndex);

    minChild = minChildIndex === undefined ? undefined : minHeap[minChildIndex];
  }
}

// Just calls bubble down for every element in the heap, starting from the back
function heapify(minHeap) {
  for(let i = minHeap.length - 1; i >= 0; i--) {
    bubbleDown(minHeap, i);
  }
}



let arrs = [
[5, 6,  8,  16],
[3, 7,  12, 13],
[1, 10, 11, 15],
[2, 4,  9,  14],
]

console.log(mergeKSorted(arrs))
