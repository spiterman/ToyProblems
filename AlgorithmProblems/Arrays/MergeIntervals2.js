function mergeInterval(intervals, rangeToAdd) {
  let result = [];

  for(let i = 0; i < intervals.length; i++) {
    if(overlap(intervals[i], rangeToAdd)) {
      rangeToAdd = merge(intervals[i], rangeToAdd);
    } else if(rangeToAdd[0] < intervals[i][0]) {
      result.push(rangeToAdd);
      result.concat(intervals.slice(i, intervals.length));
      return result;
    } else {
      result.push(intervals[i]);
    }
  }

  result.push(rangeToAdd);
  return result;
}

function overlap(i1, i2) {
  if(i1[0] >= i2[0] && i1[0] <= i2[1]) {
    return true;
  }
  if(i2[0] >= i1[0] && i2[0] <= i1[1]) {
    return true;
  }
  return false;
}

function merge(i1, i2) {
  return [Math.min(i1[0], i2[0]), Math.max(i1[1], i2[1])]
}


console.log(mergeInterval([[0, 1], [2, 3], [4, 5]], [0, 4] ))

// console.log(overlap([0, 1], [6, 7]))
