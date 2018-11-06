function numberOfOnes(arr) {
  let start = 0;
  let end = arr.length;
  let mid = Math.floor((start + end) / 2)

  while (start < end) {
    if(arr[mid] === 0) {
      start = mid + 1
    } else {
      end = mid
    }
    mid = Math.floor((start + end) /2)
  }
  return arr.length - mid;
}





// function NumberOfOnes(arr){
//
//   var minIndex = 0;
//   var maxIndex = arr.length - 1;
//   var currentIndex;
//   var currentElement;
//
//   // Edge Case Checks
//
//   if(arr[0] === 1){
//     return arr.length;
//   }
//   if(arr[arr.length - 1] === 0){
//     return 0;
//   }
//
//   while(minIndex <= maxIndex) {
//
//     currentIndex = Math.floor((minIndex + maxIndex) / 2) | 0;
//     currentElement = arr[currentIndex];
//
//     if(currentElement === 0){
//       minIndex = currentIndex + 1;
//     }
//     else if (currentElement === 1){
//       if(arr[currentIndex - 1] === 0){
//         return arr.length - currentIndex
//
//       } else {
//         maxIndex = currentIndex - 1
//       }
//     }
//   }
//
//   return 0;
// }

console.log(NumberOfOnes([0, 0, 0, 1, 1, 1, 1]))
