//https://leetcode.com/problems/insert-interval/submissions/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    let mergedInterval = newInterval;
    let addedMergedInterval = false;
    let result = [];
    if(intervals.length === 0) {
        result.push(newInterval);
        return result;
    }

    intervals.forEach((interval) => {
        if(intervalsOverlap(mergedInterval, interval)) {
           mergedInterval = mergeIntervals(mergedInterval, interval);
        } else {
            if(findLowerInterval(mergedInterval, interval) == mergedInterval && !addedMergedInterval) {
                result.push(mergedInterval);
                addedMergedInterval = true;
            }
            result.push(interval);
        }
    })

    if(!addedMergedInterval) {
        result.push(mergedInterval);
    }
    return result;
};

function findLowerInterval(firstInterval, secondInterval) {
    if(firstInterval[0] < secondInterval[0]) {
        return firstInterval
    }
    return secondInterval;
}

function intervalsOverlap(firstInterval, secondInterval) {
    let firstIntervalLowerBound = firstInterval[0]
    let firstIntervalUpperBound = firstInterval[1]
    let secondIntervalLowerBound = secondInterval [0]
    let secondIntervalUpperBound = secondInterval[1]
    if(firstIntervalLowerBound <= secondIntervalLowerBound && firstIntervalUpperBound >= secondIntervalLowerBound) {
        return true;
    }
    if(secondIntervalLowerBound <= firstIntervalLowerBound && secondIntervalUpperBound >= firstIntervalLowerBound) {
        return true;
    }
    return false;
}

function mergeIntervals(firstInterval, secondInterval) {
    return [Math.min(firstInterval[0], secondInterval[0]), Math.max(firstInterval[1], secondInterval[1])]
}
