/*
Given an arry of sorted integers and a target value,
return the pair of indices of the arry who's value add up to the target.
Otherwise return [-1, -1]

Example:
Input: [-5, 1, 3, 6, 7], -2      =>	Output: [0,2]
Input: [1, 9, 10], 8			=>	Output: [-1,-1]
*/

function sortedTwoSum(arr, target) {
  let i = 0;
  let j = arr.length - 1;

  while (i < j){
    if(arr[i] + arr[j] === target) {
      return [i, j]
    }
    if(arr[i] + arr[j] > target) {
      j--;
    } else {
      i++;
    }
  }
  return [-1, -1]
}

console.log(sortedTwoSum([1, 2, 3, 4, 5], 10));
