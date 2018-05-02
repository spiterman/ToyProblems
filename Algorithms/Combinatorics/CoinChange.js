/*
Write a function that takes in an amount, and an array of integers
representing the available denominations, return the possible combinations of coins, without repeats

CoinChange(4, [1, 2, 3]) => 4  or [[1, 1, 1, 1], [1, 1, 2], [1, 3], [2, 2]]
*/

function CoinChange(target, coins) {
  let result = []

  let change = [];

  function traverseCoins(amount, index){
    if(amount === 0) {
      result.push(change.slice());
      return;
    }
    if(amount < 0) {
      return;
    }
    for(let i = index; i < coins.length; i++){
      change.push(coins[i]);
      traverseCoins(amount - coins[i], i);
      change.pop();
    }
  }

  traverseCoins(target, 0);
  return result;
}

// Test
console.log(CoinChange(4, [1, 2, 3]));

module.exports = CoinChange;
