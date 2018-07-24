function twoSumPairs(arr, target) {
  let counts = {};
  arr.forEach((item) => {
    counts[item] = counts[item] === undefined? 1 : counts[item] + 1
  })

  let total = 0;
  for (let key in counts) {
    let k = Number(key)
    if(counts[target - k] && (k != target - k)) {
      total += counts[target - k] * counts[key];
      delete counts[key];
      delete counts[target - k];
    }
  }

  if(target/2 in counts) {
    let n = counts[target/2]
    total += (n * (n-1))/2
  }

  return total;
}

console.log(twoSumPairs([1,1,3,2,2,2], 4)) // 5
console.log(twoSumPairs([1,1,3,2,2,2], 5)) // 3
