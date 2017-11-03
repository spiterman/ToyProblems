function Quickselect(arr, k) {
  let kthLargest;

  function recurse(start, end) {
    let pivot = end;
    let wall = start;
    let current = start;
    for(current; current <= end; current++) {
      if(arr[current] < arr[pivot]) {
        [arr[current],arr[wall]] = [arr[wall],arr[current]];
        wall++;
      }
    }
    [arr[pivot],arr[wall]] = [arr[wall],arr[pivot]];

    if(pivot === (arr.length - k)) {
      kthLargest = arr[pivot];
      return;
    }
    if(pivot > (arr.length - k)) {
      recurse(start, pivot - 1);
    } else {
      recurse(pivot + 1, end);
    }
  }

  recurse(0, arr.length - 1);
  return kthLargest;
}

console.log(Quickselect([3, 1, 6, 4, 9, 8], 1))
