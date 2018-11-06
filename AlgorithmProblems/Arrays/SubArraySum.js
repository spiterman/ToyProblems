/*
Given an array of positive integers and a target value, return true if there is a subarray of consecutive elements that sum up to this target value.
*/

function subArraySum(arr, target) {
  let start = 0;
  let currentSum = 0;

  for(let end = 0; end < arr.length; end++){
    if(currentSum === target) {
      return true;
    }
    currentSum += arr[end];

    while(currentSum > target) {
      currentSum -= arr[start]
      start++;
    }
  }
  return currentSum === target;
}

module.exports = subArraySum;
// console.log(subArraySum([6,12,1,7,5,2,3], 12));
