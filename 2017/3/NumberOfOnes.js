function NumberOfOnes(arr){

  var minIndex = 0;
  var maxIndex = arr.length - 1;
  var currentIndex;
  var currentElement;

  // Edge Case Checks

  if(arr[0] === 1){
    return arr.length;
  }
  if(arr[arr.length - 1] === 0){
    return 0;
  }

  while(minIndex <= maxIndex) {

    currentIndex = Math.floor((minIndex + maxIndex) / 2) | 0;
    currentElement = arr[currentIndex];

    if(currentElement === 0){
      minIndex = currentIndex + 1;
    }
    else if (currentElement === 1){
      if(arr[currentIndex - 1] === 0){
        return arr.length - currentIndex

      } else {
        maxIndex = currentIndex - 1
      }
    }
  }

  return 0;
}
