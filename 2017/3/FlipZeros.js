function flipZeros(arr, m){

  // Current Max Count
  var maxCount = 0;

  // Current Zero Count
  var currentCount = 0;

  // Keeps Track of Left and Rightmost zeros
  var left = 0;
  var right = 0;

  // Keeps Track
  var zeros = [];

  // First Loop to Create Zeros Array
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      zeros.push(i);
    }
  }

  // Second Loop To Flip Zeros
  while(right < arr.length){

    // If there are no zeros left to flip
    if(m > 0){
      if(arr[right] === 0){
        m--;
      }
      currentCount++;
      right++;
    }
    // If there are
    else {
      if(arr[right] === 1){
        currentCount++;
        right++;
      } else {
        // Subtract the flipped zero and any ones that were with it
        currentCount = right - zeros[left] - 1;
        left++;
        m++;
      }
    }
    // Update the max count
    if(currentCount > maxCount){
      maxCount = currentCount;
    }
  }

  return maxCount;
}

console.log(flipZeros([0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1], 7));
