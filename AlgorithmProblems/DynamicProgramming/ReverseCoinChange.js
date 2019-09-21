// Repl: https://repl.it/repls/YearlyFearlessQbasic
// Given a set of ways to break down values, return the valid set of coins
// that can produce that result

function reverseCoin(inputTable) {
  let rebuildTable = new Array(inputTable.length).fill(0);
  rebuildTable[0] = 1;
  let solutionCoins = [];

  for(let coin = 0; coin < rebuildTable.length; coin++) {
    if(inputTable[coin] > rebuildTable[coin]) {
      let copy = rebuildTable.slice();
      for(let amountToBreak = coin; amountToBreak < rebuildTable.length; amountToBreak++) {
        rebuildTable[amountToBreak] += rebuildTable[amountToBreak - coin];
      }
      solutionCoins.push(coin);
    }

    if(inputTable[coin] != rebuildTable[coin]) {
      return [];
    }
  }
  return solutionCoins;
}

console.log(reverseCoin([1, 1, 1, 2, 2, 1]));
reverseCoin([1,0,1,0,1,1,2,1,2,1,3]);
