/*
Write a function that takes in an amount, and an array of integers
representing the available denominations, return the possible combinations of coins, without repeats

CoinChange(4, [1, 2, 3]) => 4  or [[1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2]]
*/

function CoinChange(amount, coins) {
  let combos = 0;

  function traverseCoins(sumSoFar, index){
    if(sumSoFar === amount){
      combos++;
      return;
    }
    if (sumSoFar > amount) {
      return;
    }
    for(let i = index; i < coins.length; i++){
      traverseCoins(sumSoFar + coins[i], i);
    }
  }
  traverseCoins(0, 0);
  return combos;
}

// Test
// console.log(CoinChange(4, [1, 2, 3]));

module.exports = CoinChange;
