
// Space: O(NK)
// Time: O(NK log(NK))

function mergeKSortedNaive(arrays) {
  let result = [];
  arrays.forEach(arr => {
    result = result.concat(arr);
  });

  result.sort((a, b) => {
    return a - b;
  });

  return result;
}


let arrs = [
[5, 6,  8,  16],
[3, 7,  12, 13],
[1, 10, 11, 15],
[2, 4,  9,  14],
]

console.log(mergeKSortedNaive(arrs));
