// const Swap = require('./Swap.js');

var moveZeroes = function(nums) {
    var back = 0
    var front = 0

    while(front < nums.length) {
      if(nums[back] !== 0){
        back++
      } else if(nums[front] !== 0 ) {
        Swap(nums, front, back)
        // [nums[front], nums[back]] = [nums[back], nums[front]];
        back++
      }
       front++;
    }
    return nums
};


console.log(moveZeroes([1, 0, 2, 3, 8, 0, 2, 1, 0]));
