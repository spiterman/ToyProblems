function combinations(n, k) {
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

// combinations(4, 2);

module.exports = combinations;
