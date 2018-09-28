function latticePaths(width, height) {
  let memo = {'0.0':1}
  function helper(x, y) {
    if(x < 0 || y < 0){
      return 0;
    }
    if((`${x}.${y}` in memo)){
      return memo[`${x}.${y}`];
    }
    let newCell = helper(x - 1, y) + helper(x, y - 1)
    memo[`${x}.${y}`] = newCell;
    return newCell;
  }
  return helper(width, height);
}

latticePaths(3, 4)
