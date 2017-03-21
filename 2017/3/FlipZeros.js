function flipZeros(arr, m){
  var maxCount = 0;
  var currentCount = 0;

  var left = 0;
  var right = 0;

  var zeros = [];

  for(var i = 0; i < arr.length; i++){
    if(arr[i] === 0){
      zeros.push(i);
    }
  }

  while(right < arr.length){
    if(m > 0){
      if(arr[right] === 0){
        m--;
      }
      currentCount++;
      right++;
    } else {
      if(arr[right] === 1){
        currentCount++;
        right++;
      } else {
        currentCount = right - zeros[left] - 1;
        left++;
        m++;
      }
    }
    if(currentCount > maxCount){
      maxCount = currentCount;
    }
  }

  return maxCount;
}
