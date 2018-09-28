function shortestSequenceContainingSet(set, arr) {
  let start = 0;
  let end = 0;

  let seen = {};
  let seenSize = 0;

  let shortestSequence = Infinity;

  while(end < arr.length) {

    if(!set.has(arr[start])) {
      start++;
    }

    if(!set.has(arr[end])) {
      end++;
    }

    if(set.has(arr[start]) && seenSize < set.size) {

      let element = arr[end]

      if(set.has(element)) {
        if(seen[element]) {
          seen[element] += 1;
        } else {
          seen[element] = 1;
          seenSize++;
        }
      }
      end++;
    }


    if(seenSize === set.size) {
      if(end - start < shortestSequence ) {
        shortestSequence = end - start;
      }
      let element = arr[start];

      if(seen[element] === 1) {
        delete seen[element];
        seenSize--;
      } else {
        seen[element]--;
      }
      start++;
    }

  }
  return shortestSequence === Infinity ? -1 : shortestSequence;
}

// let set = new Set([1, 2, 3]);
// let arr = [4, 1, 2, 6, 7, 1, 3, 2, 5];

// console.log(shortestSequenceContainingSet(set, arr))
// Time: O(n) where n = length of the array
// Space: O(k) where k = size of the set

module.exports = shortestSequenceContainingSet;
