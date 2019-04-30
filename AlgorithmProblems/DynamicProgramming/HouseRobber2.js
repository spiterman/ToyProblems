let counter = 0;

function houseRobberRecursive(arr) {
  function stealFromHouse(index) {
    if(index >= arr.length) {
      counter++;
      return 0;
    }
    return Math.max(arr[index] + stealFromHouse(index + 2), stealFromHouse(index + 1));
  }
  return stealFromHouse(0);
}

// console.log(houseRobberRecursive([3, 1, 2, 5, 4, 2, 5]))
// houseRobberRecursive([1, 2, 3, 4])
// console.log(counter)

let results = {};
let array = [];

for(let i = 0; i <= 20; i++) {
  houseRobberRecursive(array);
  results[i] = counter;
  counter = 0;
  array.push(i);
}

console.log(results);


function houseRobber1(houses) {
  let max_gold = []

  for(let i = 0; i < houses.length; i++) {
    let current = houses[i];
    let prevMax = max_gold[i - 1] || 0;
    let twoBackMax = max_gold[i - 2] || 0;
    max_gold.push(Math.max(current + twoBackMax, prevMax));
  }

  return max_gold[houses.length - 1];
}

function houseRobber2(houses) {
  let currentMax = 0;
  let prevMax = 0;

  for(let i = 0; i < houses.length; i++) {
    let currentHouse = houses[i];
    let newMax = Math.max(currentMax, prevMax + currentHouse)
    prevMax = currentMax;
    currentMax = newMax;
  }

  return currentMax
}

houseRobber2([3, 5, 1, 3, 4, 5, 1]) // => 13
