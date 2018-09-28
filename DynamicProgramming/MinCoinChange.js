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
