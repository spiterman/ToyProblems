// Given a sorted array of 0s and 1s, retun the number of Ones

function sortedBitSearch(arr) {
  let front = 0;
  let back = arr.length - 1;
  let mid = Math.floor(back/2);

  // Slightly modified binary search
  // When the mid is a zero, set front to mid and increment by 1
  // When the mid is a 1, just set the back equal to mid
  while(front < back) {
    if (arr[mid] === 0) {
      front = mid + 1;
    } else {
      back = mid;
    }
    mid = Math.floor((front + back)/2);
  }
  return arr[mid] === 0 ? 0 : arr.length - mid;
}

console.log(sortedBitSearch([0,0,0,0, 1]));

module.exports = sortedBitSearch;
