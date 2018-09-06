/*
wall = 0
pivot = 5
end = 5
start = 0
current = 0
k = 1

[3, 1, 6, 4, 9, 8]
                p
                c
             w
*/


function Quickselect(arr, k) {
  let kthLargest;

  function recurse(start, end) {
    if(start > end) return;

    let pivot = end;
    let wall = start;
    let current = start;

    for(current; current < end; current++) {
      if(arr[current] < arr[pivot]) {
        [arr[current], arr[wall]] = [arr[wall], arr[current]];
        wall++;
      }
    }

    [arr[pivot], arr[wall]] = [arr[wall], arr[pivot]];

    if(wall === (arr.length - k)) {
      kthLargest = arr[wall];
      return;
    }

    if(wall > (arr.length - k)) {
      recurse(start, wall - 1);
    } else {
      recurse(wall + 1, end);
    }
  }

  recurse(0, arr.length - 1);
  return kthLargest;
}

console.log(Quickselect([3, 1, 6, 4, 9, 8], 5))
