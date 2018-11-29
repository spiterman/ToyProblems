'use strict';

function minCoinChange(coins, amount) {
  let memo = {};

  function recurse(sum) {
    if(memo[sum] !== undefined) {
      return memo[sum];
    }

    if(sum < 0) {
      return false;
    }

    if(sum === 0) {
      return 0;
    }

    let min = Infinity;

    for(let i = 0; i < coins.length; i++) {

      let testMin = recurse(sum - coins[i]);
      if(testMin !== false) {
        min === undefined ? min = testMin : min = Math.min(min, testMin);
      }
    }

    memo[sum] = min + 1;

    return memo[sum];

  }

  recurse(amount);
  return memo[amount] === Infinity ? -1 : memo[amount];
}


// console.log(minCoinChange([1, 2, 3, 50], 110));

module.exports = minCoinChange;


function minCoinChange(coins, target) {
  let minimumCoinsUsed = Infinity;

  function subtract(amount, numCoins) {
    if(amount === 0) {
      minimumCoinsUsed = Math.min(minimumCoinsUsed, numCoins);
      return;
    }
    for(let c = 0; c < coins.length; c++) {
      if(amount - coins[c] >= 0) {
        subtract(amount - coins[c], numCoins + 1);
      }
    }
  }

  subtract(target, 0);

  return minimumCoinsUsed;
}

let coins = [1, 7, 10]
let target = 140;

// minCoinChange(coins, target)



function minCoinChangeMemo(coins, target) {
  let cache = {};

  function subtract(amount) {
    if(amount in cache) return cache[amount];
    if(amount === 0) {
      return 0;
    }
    let min = Infinity;
    for(let c = 0; c < coins.length; c++) {
      if(amount - coins[c] >= 0) {
        min = Math.min(min, subtract(amount - coins[c]))
      }
    }
    cache[amount] = min + 1;
    return min + 1;
  }
  return subtract(target);
}
function minCoinChangeTab(coins, target) {
  let table = [0];

  for(let amount = 1; amount <= target; amount++) {
    let min = Infinity;
    for(let c = 0; c < coins.length; c++) {
      if(amount - coins[c] >= 0) {
        min = Math.min(min, table[amount - coins[c]])
      }
    }
    table.push(min + 1);
  }
  console.log(table)
  return table[target];
}
// [2, 4], 1

// [0, -1, 1, -1, 1, -1, 2, -1, 2]
//  0,  1, 2 , 3, 4,  5, 6,  7, 8

// minCoinChangeTab([1, 7, 10], 100000)
minCoinChangeMemo([2, 7, 10], 10000)
