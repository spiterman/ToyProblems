/*
Find Shortest Sub Array

Given a non-empty array of non-negative integers nums, the degree of this array is defined as the maximum frequency of any one of its elements.

Your task is to find the smallest possible length of a (contiguous) subarray of nums, that has the same degree as nums.

Example 1:
Input: [1, 2, 2, 3, 1]
Output: 2

Explanation:
The input array has a degree of 2 because both elements 1 and 2 appear twice.
Of the subarrays that have the same degree:
[1, 2, 2, 3, 1], [1, 2, 2, 3], [2, 2, 3, 1], [1, 2, 2], [2, 2, 3], [2, 2]
The shortest length is 2. So return 2.


Example 2:
Input: [1,2,2,3,1,4,2]
Output: 6

Note:
nums.length will be between 1 and 50,000.
nums[i] will be an integer between 0 and 49,999.
*/


function findShortestSubArray(nums) {
  let counts = {};

  nums.forEach((element, index) => {
    counts[element] ? counts[element].push(index) : counts[element] = [index];
  });

  let degree = 0;
  let minRange = Infinity;

  for (let key in counts) {
    let newDegree = counts[key].length;
    let newRange = counts[key][newDegree - 1] - counts[key][0] + 1;
    if(newDegree > degree) {
      degree = newDegree;
      minRange = newRange;
    } else if(newDegree == degree) {
      minRange = Math.min(minRange, newRange);
    }
  }

  return minRange;
}

// findShortestSubArray([1, 2, 2, 3, 1, 4, 2, 3, 3, 3, 4, 4, 4, 4, 1, 1, 1, 2, 2, 2, 2]);
// findShortestSubArray([1,2,2,3,1,4,2]);
