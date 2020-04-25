// https://leetcode.com/problems/subarray-sum-equals-k/submissions/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
    let numWays = 0;
    let currentSum = 0;
    let sumsSeen = {};

    for(let i = 0; i < nums.length; i++) {
        let n = nums[i];
        currentSum += n;
        if(currentSum === k) {
            numWays += 1;
        }
        if((currentSum - k) in sumsSeen) {
            numWays += sumsSeen[currentSum - k];
        }

        if(sumsSeen[currentSum] === undefined) {
            sumsSeen[currentSum] = 1;
        } else {
            sumsSeen[currentSum] += 1;
        }
    }
    return numWays
};

// sum = 0;

// [1, 1, 1]
//  f
//  s
//
