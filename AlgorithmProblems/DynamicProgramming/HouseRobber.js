function houseRobber(arr) {
  let minusTwoMax = arr[0]
  let minusOneMax = arr[1];

  let max;

  for(let i = 2; i < arr.length; i++) {
      max = Math.max(minusTwoMax + arr[i], minusOneMax);
      minusTwoMax = minusOneMax;
      minusOneMax = max;
  }
  
  return max;
}


console.log(houseRobber([1, 2, 4, 1, 5, 12, 5, 1]));
