/*
CLOSED INTERVAL
 Merge a closed interval [x, y] into an unsorted list of non-overlapping intervals [[x1,y1], [x2,y2]...].
    A = [[5,6], [2,4], [8,9]] [10, 11]

    mergeInterval([3,7], A) -> [[2,7], [8,9]]
    mergeInterval([4,6], A) -> [[2,6], [8,9]]
    mergeInterval([5,6], A) -> [[2,4],[5,6],[8,9]]
    mergeInterval([1,12], A) -> [[1,12]]
    mergeInterval([1,3], A) -> [[1,4] [5,6], [8,9]]
    mergeInterval([11,13], A) -> [[2,4] [5,6], [8,9], [11,13


       3_______________________9

    2____4
            5 ______ 7
                           8______ 10

               6____7


    
   ... 2__10 ....

    A contains non overlapping intervals

//     Cases for new Interval and how it relates to a given interval in the list
//     1) Does not overlap at all
//          a) comes before (insert)
//          b) comes after (keep going)
//    2) Overlap
//          a) Fits entirely within other interval
//          b) All encompassing
//          c) overlaps over part of it
*/

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
