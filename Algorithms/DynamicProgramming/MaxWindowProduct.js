function maxProduct(arr) {
  let max = 0;
  let current = 1;
  let slow = 0;
  let fast = 0;

  while (fast < arr.length) {
    if(arr[fast] === 0 || fast >= arr.length) {
      while(slow < fast) {
       current /= arr[slow]
       slow += 1;
       max = Math.max(current, max);
      }
      fast += 1;
    } else {
      current *= arr[fast];
      max = Math.max(current, max);
      fast += 1;
    }
  }
  return max;
}


var maxProduct = function(arr) {
  let max;
  let current;
  let slow = 0;
  let fast = 0;

  while (fast < arr.length) {
    if(arr[fast] === 0 || fast >= arr.length) {
      max = max === undefined ? 0 : Math.max(0, max);
      while(slow < fast) {
       current /= arr[slow]
       slow += 1;
       if(current != 1) {
        max = Math.max(current, max);
       }
      }
      current = undefined
      fast += 1;
    } else {
      current = current === undefined ? arr[fast] : current * arr[fast];
      max = max === undefined ? current : Math.max(current, max);
      fast += 1;
    }
  }
  return max;
};



var maxProduct = function(arr) {
  let max;
  let current;
  let slow = 0;
  let fast = 0;

  while (fast < arr.length && slow < arr.length) {
    if(arr[fast] === 0) {
      max = max === undefined ? 0 : Math.max(0, max);
    }

    if(arr[fast] !== 0) {
      current = current === undefined ? arr[fast] : current * arr[fast];
      max = max === undefined ? current : Math.max(current, max);
    }



    if(arr[fast] === 0 || fast >= arr.length) {
      // max = current === undefined ? 0 : Math.max(0, max);
      while(slow < fast) {
        current /= arr[slow]

        if(arr[slow] !== 1 ) {
          max = Math.max(current, max);
        }
        slow += 1
      }
      current = undefined
      slow += 1
    }
    fast += 1;
  }
  return max;
};





var maxProduct = function(arr) {
  let result = arr[0]

  let max = result
  let min = result

  for(let i = 1; i < arr.length; i++) {
    if(arr[i] < 0) {
      [max, min] = [min, max]
    }
    max = Math.max(arr[i], max * arr[i])
    min = Math.min(arr[i], min * arr[i])

    result = Math.max(result, max)
  }
  return result;
};


console.log(maxProduct([1, 2, 3, -1, -2, 0, 100])) //100
console.log(maxProduct([1, 2, 0, 100, -2, 0, 10])) //100
console.log(maxProduct([-2, 0, -1])) //0
console.log(maxProduct([2,3,-2,4])) //6
console.log(maxProduct([3, -1, 4])) // 4 Wrong
console.log(maxProduct([-2])) // -2
console.log(maxProduct([-2, 1, 0, -1])) //1 Wrong
console.log(maxProduct([])) //1 Wrong
