function nthSmallestMissing(arr, n) {
  let start = 0;
  let end = arr.length;
  let mid = Math.floor((end + start)/2);
  let numsMissingToLeft = (arr[mid] - arr[start]) - (mid - start);;

  while(start < end - 1) {
    if(numsMissingToLeft >= n) {
      end = mid;
      mid = Math.floor((end + start)/2)
      numsMissingToLeft -= (arr[end] - arr[mid]) - (end - mid);
    } else {
      start = mid;
      mid = Math.floor((end + start)/2)
      numsMissingToLeft += (arr[mid] - arr[start]) - (mid - start);
    }
  }

  return arr[mid] + (n - numsMissingToLeft);
}

/*
numsMissingToLeft = 4
start = 1
end = 2
mid = 1

n = 5

*/

// nthSmallestMissing([3, 8, 9, 10, 12, 15], 5);
// nthSmallestMissing([1, 2, 3, 4, 5, 6, 8, 12, 15], 4);
nthSmallestMissing([100, 101, 103, 201], 90)



// 4, 5, 6, 7,    9, 10, 11,          13, 14
