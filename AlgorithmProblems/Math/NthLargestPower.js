// Inefficient Solution

// function nthPowerNumber(n) {
//   let powerSet = new Set();
//   let currentMax = 0;
//
//   for(let i = 2; i <= n + 2; i++) {
//     let newNum = Math.pow(i, 2);
//     powerSet.add(newNum);
//     currentMax = Math.max(newNum, currentMax);
//   }
//
//   let currentPower = 3;
//   while(Math.pow(2, currentPower) < currentMax) {
//     let base = 2;
//
//     while(Math.pow(base, currentPower) < currentMax) {
//       let newPower = Math.pow(base, currentPower);
//       if(!powerSet.has(newPower)) {
//         powerSet.add(newPower);
//         powerSet.delete(currentMax);
//         currentMax = findNewMax(powerSet);
//       }
//       base++;
//     }
//     currentPower++;
//   }
//   return currentMax;
// }
//
// function findNewMax(set) {
//   let currentMax = 0;
//   set.forEach((item) => {
//     currentMax = Math.max(currentMax, item);
//   });
//   return currentMax;
// }
//
// console.time('nthPowerNumber')
// console.log(nthPowerNumber(100000)); //9565426809
// console.timeEnd('nthPowerNumber') //11381.285 ms




function nthPowerNumber2(n) {
  let powerSet = new Set();
  let powerLists = [[]]

  let currentMax = 0;
  let powerIndex = 0;

  // Adds all powers of 2 - Works okay
  for(let i = 2; i <= n + 2; i++) {
    let newNum = Math.pow(i, 2);
    powerSet.add(newNum);
    powerLists[0].push(newNum);
    currentMax = Math.max(newNum, currentMax);
  }


  // Go until 2^currentPower is larger than currentMax
  let currentPower = 3;
  while(Math.pow(2, currentPower) < currentMax) {
    let base = 2;
    let newList = [];
    let newListPushed = false;

    while(Math.pow(base, currentPower) < currentMax) {
      let newPower = Math.pow(base, currentPower);
      if(!powerSet.has(newPower)) {
        powerSet.add(newPower);
        newList.push(newPower);
        if(!newListPushed) {
          powerLists.push(newList);
          newListPushed = true;
        }
        powerSet.delete(currentMax); //Remove previous max from powerSet
        powerLists[powerIndex].pop(); //Remove previous max from powerLists
        let temp = findNewMax2(powerLists);
        currentMax = temp[0];
        powerIndex = temp[1];
      }
      base++;
    }
    currentPower++;
  }
  return currentMax;
}


function findNewMax2(arrayOfArrays) {
  let result = [0, 0];
  arrayOfArrays.forEach((item, index) => {
    if(item[item.length - 1] > result[0]) {
      result[0] = item[item.length - 1];
      result[1] = index;
    }
  });
  return result;
}


console.time('nthPowerNumber')
console.log(nthPowerNumber2(100000)); // 9565426809
console.timeEnd('nthPowerNumber') //52.245 ms
