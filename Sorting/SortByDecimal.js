let nums = [];
for (let i=0; i < 100; i++) {
  nums.push(Math.floor(Math.random() * 1000)/1000 + Math.floor(Math.random() * 1000));
}


// console.log(nums)

function sortByDecimal(nums) {
  nums.forEach((num, index) => {
    let str = num + '';
    nums[index] = str.split('.');
  })

  nums.sort((a, b) => {
    return a[1] - b[1]
  })

  nums.forEach((num, index) => {
    nums[index] = Number(num[0] + '.' + num[1]);
  })
  return nums;
}



console.log(sortByDecimal(nums))
