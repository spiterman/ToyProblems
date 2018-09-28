function numWaysCoinChange(coins, target) {
  let result = new Array(target + 1).fill(0);
  result[0] = 1;
  coins.forEach((coin, index) => {
    for(let i = 1; i < result.length; i++ ){
      if(i - coin >= 0) {
        result[i] = result[i] + result[i - coin];
      }
    }
  })
  return result[target];
}

console.log(numWaysCoinChange([1, 2, 3], 10));
