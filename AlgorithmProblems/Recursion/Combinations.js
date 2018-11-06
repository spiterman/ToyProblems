function combinations1(n, k) {
  let result= [];

  function recurse(start, combos) {
    if(combos.length === k) {
      return result.push(combos);
    }
    if(start > n) {
      return;
    }
    let temp = combos.slice();
    recurse(start + 1, temp);
    temp.push(start);
    recurse(start + 1, temp);
  }

  recurse(1, []);
  return result;
}

// Optimizes space/time by only copying combos when ready to push into result
// Also saves time by breaking out of recursion when the number of combos can't reach length k
function combinations2(n, k) {
  let result= [];

  function recurse(start, combos) {
    if(combos.length === k) {
      return result.push(combos.slice());
    }
    if(combos.length + (n - start + 1) < k){
      return;
    }
    recurse(start + 1, combos);
    combos.push(start);
    recurse(start + 1, combos);
    combos.pop();
  }

  recurse(1, []);
  return result;
}


// combinations(4, 2);

console.time("combinations 1")
combinations1(60, 4)
console.timeEnd("combinations 1")

console.time("combinations 2")
combinations2(60, 4)
console.timeEnd("combinations 2")

// module.exports = combinations;
