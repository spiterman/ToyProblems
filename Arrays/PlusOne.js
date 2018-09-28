/*
Given an array of integers, write a function that handles adding one two the array

Examples:
[7, 6, 2] => [7, 6, 3]
[1,0,0] => [1,0,1]
[9,9,9] => [1, 0, 0, 0]
*/

function plusOne(arr){
  let carry = 1;
  let i = arr.length - 1;

  while(carry && i >= 0){
    let num = arr[i] + 1;
    if(num === 10) {
      arr[i] = 0;
    } else {
      arr[i] += 1;
      carry = 0;
    }
    i--;
  }
  if(carry){
    arr.unshift(1)
  }
  return arr;
}

// console.log(plusOne([1, 9, 9]))

module.exports = plusOne;
