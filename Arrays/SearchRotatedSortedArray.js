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



/*
Updated Version

function searchRotatedSortedArray(arr, target) {
  let start = 0;
  let end = arr.length;
  let mid;

  while(start < end) {
    mid = Math.floor((start + end)/2);

    if(arr[mid] === target) {
      return mid
    }
//     Left Half is the closed Range

     if(arr[start] < arr[mid]) {
      if(target >= arr[start] && target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }


//     Right Half is the closed Range
    } else {
      if(target >= arr[start] || target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }


  }

  return -1;
}

console.log(searchRotatedSortedArray([3, 9, 9, 9, 10, 10, 10, 10, 11, 15], 9))


// Handles Repeats

function searchRotatedSortedArray(arr, target) {
  let start = 0;
  let end = arr.length;
  let mid;

  while(start <= end) {
    mid = Math.floor((start + end)/2);
    if(arr[mid] === target && arr[mid - 1] !== target) {
      return mid
    }
//     Left Half is the closed Range

     if(arr[start] <= arr[mid]) {
      if(target >= arr[start] && target <= arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }


//     Right Half is the closed Range
    } else {
      if(target >= arr[start] || target <= arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }


  }

  return -1;
}


Also handles repeats, similar to first Version

function searchRotatedSortedArray(arr, target) {
  let start = 0;
  let end = arr.length;
  let mid;

  while(start < end) {
    mid = Math.floor((start + end)/2);

    if(arr[mid] === target) {
      if(arr[mid-1] !== target){
        return mid
      }else{
        end = mid;
        continue
      }
    }
//     Left Half is the closed Range

     if(arr[start] < arr[mid]) {
      if(target >= arr[start] && target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }


//     Right Half is the closed Range
    } else {
      if(target >= arr[start] || target < arr[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }


  }

  return -1;
}

console.log(searchRotatedSortedArray([3, 9, 9, 9, 10, 10, 10, 10, 11, 15], 9))




*/
