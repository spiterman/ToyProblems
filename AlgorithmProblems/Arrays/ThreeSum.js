function threeSum(arr) {
  arr.sort((a, b) => {
    return a - b
  }); // O(N * Log(N))
  let resultSet = new Set();

  console.log(arr)

  for(let i = 0; i < arr.length - 2; i++) {
    let current = arr[i];
    let left = i + 1;
    let right = arr.length - 1;

    while(left < right) {
      let l = arr[left]
      let r = arr[right]
      let sum = current + l + r;
      if(sum === 0) {
        resultSet.add(`${current}.${l}.${r}`);
      }
      if(sum < 0) {
        left = left + 1;
      } else {
        right = right - 1;
      }
    }
  }

  let result = [];

  resultSet.forEach(item => {
    let validSum = item.split('.');
    validSum.forEach((num, index) => {
      validSum[index] = Number(num);
    })
    result.push(validSum);
  })

  return result;
}

console.log(threeSum([-1,-2,-3,4,1,3,0,3,-2,1,-2,2,-1,1,-5,4,-3]))

// https://www.geeksforgeeks.org/find-triplets-array-whose-sum-equal-zero/
// https://leetcode.com/problems/3sum/
