function nthPowerNumber(n) {
  let powerSet = new Set();
  let currentMax = 0;

  for(let i = 2; i <= n + 2; i++) {
    let newNum = Math.pow(i, 2);
    powerSet.add(newNum);
    currentMax = Math.max(newNum, currentMax);
  }

  let currentPower = 3;
  while(Math.pow(2, currentPower) < currentMax) {
    let base = 2;

    while(Math.pow(base, currentPower) < currentMax) {
      let newPower = Math.pow(base, currentPower);
      if(!powerSet.has(newPower)) {
        powerSet.delete(currentMax);
        currentMax = findNewMax(powerSet);
      }
      base++;
    }
    currentPower++;
  }
  return currentMax;
}



function findNewMax(set) {
  let currentMax = 0;
  set.forEach((item) => {
    currentMax = Math.max(currentMax, item);
  });
  return currentMax;
}

console.log(nthPowerNumber(10));
