function searchRotatedSortedArray(arr, target) {
  let start = 0;
  let end = arr.length;
  let mid;

  while(start < end) {
    mid = Math.floor((start + end)/2);

    if(arr[mid] === target) {
      return mid;
    }

    if(arr[start] < arr[mid]) {
      if(target >= arr[start] && target <= arr[mid]) {
        end = mid;
      } else {
        start = mid;
      }

    } else {
      if(target >= arr[start] || target <= arr[mid]) {
        end = mid;
      } else {
        start = mid;
      }
    }
  }
  return -1;
}

searchRotatedSortedArray([4,5,6,7,8,9,10,11,15,3], 15)
