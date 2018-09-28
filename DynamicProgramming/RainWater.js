function rainWater(arr) {
  let result = 0;
  let globalMax = 0;
  let globalMaxIndex = 0;

  // Find the global Max and its index
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] > globalMax) {
      globalMax = arr[i];
      globalMaxIndex = i;
    }
  }

  // Loop from the left side to the global max
  let leftMax = arr[0];
  for(let i = 0; i < globalMaxIndex; i++){
    if(arr[i] >= leftMax) {
      leftMax = arr[i];
    } else {
      result = result + (leftMax - arr[i]);
    }
  }

  // Loop from the right side to the global max
  let rightMax = arr[arr.length - 1];
  for(let j = arr.length - 1; j > globalMaxIndex; j--) {
    if(arr[j] >= rightMax) {
      rightMax = arr[j];
    } else {
      result = result +  (rightMax - arr[j]);
    }
  }

  return result;
}

// console.log(rainWater([1, 5, 0, 5, 3, 0]))

module.exports = rainWater;
