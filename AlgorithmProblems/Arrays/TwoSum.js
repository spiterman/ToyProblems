/*
Given an array of integers and a target,
return the two indices in that array that sum up to the target
If none exist, return -1;
*/

function twoSum(arr, target) {
  let complements = {};
  let result = [-1, -1]
  arr.forEach((item, index) => {
    if(complements[item] === undefined) {
      complements[target - item] = index;
    } else {
      result[0] = complements[item];
      result[1] = index;
    }
  });
  return result;
}

module.exports = twoSum;

// console.log(twoSum([1, 2, 3, 5, 5], 60));

//https://leetcode.com/problems/two-sum/submissions/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*

var twoSum = function(nums, target) {

    let complements = {};
    nums.forEach((num, index) => {
        complements[target - num] = index;
    })

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] in complements && i != complements[nums[i]]) {
            return [i, complements[nums[i]]];
        }
    }
};


*/
