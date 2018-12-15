function mergeIntervals(newInterval, intervalList) {

  let newList = [];
  let intervalToMerge = newInterval;

  for(let i = 0; i < intervalList.length; i++) {
    currentInterval = intervalList[i]

    if(overlap(currentInterval, intervalToMerge)) {
        intervalToMerge = merge(currentInterval, intervalToMerge)
    } else {
        newList.push(currentInterval);
    }
  }

  newList.push(intervalToMerge)
  return newList;
}

function merge(interval1, interval2) {
  return [Math.min(interval1[0], interval2[0]), Math.max(interval1[1], interval2[1])];
}

function intersect(lowerInterval, higherInterval) {
  if(lowerInterval[0] <= higherInterval[0] &&
     lowerInterval[1]  >= higherInterval[0]) {
    return true
  }
  return false;
}

function overlap(interval1, interval2) {
  if(contains(interval1, interval2) ||
     contains(interval2, interval1) ||
     intersect(interval1, interval2) ||
     intersect(interval2, interval1)) {
      return true;
  }
  return false;
}

function contains(largeInterval, smallInterval) {
    if(largeInterval[0] <= smallInterval[0] &&
       largeInterval[1] >= smallInterval[1]) {
        return true;
    }
    return false;
}

let A = [[5,6], [2,4], [8,9], [10, 11]];


console.log(mergeIntervals([3,7], A) )// -> [[8,9], [10, 11], [2, 7]]
console.log(mergeIntervals([4,6], A) )//-> [[2,6], [8,9]]
console.log(mergeIntervals([5,6], A) )//-> [[2,4],[5,6],[8,9]]
console.log(mergeIntervals([1,12], A)) //-> [[1,12]]
console.log(mergeIntervals([1,3], A) )//-> [[1,4], [5,6], [8,9]]
console.log(mergeIntervals([11,13], A)) //-> [[2,4], [5,6], [8,9], [11,13]]
