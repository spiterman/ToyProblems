function largestHistogram(hist) {
  let stack = []
  let maxArea = 0;
  let top;
  let areaWithTop;

  let i = 0;

  while(i < hist.length) {

    if(stack.length === 0 || hist[stack[stack.length - 1]] <= hist[i]) {
      stack.push(i);
      i = i + 1
    }
   else {

    top = stack[stack.length - 1]

    stack.pop();

    areaWithTop = hist[top] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1)
    if(areaWithTop > maxArea) {
      maxArea = areaWithTop
    }
  }
  }

  while(stack.length !== 0) {
    top = stack[stack.length - 1]
    stack.pop();
    areaWithTop = hist[top] * (stack.length === 0 ? i : i - stack[stack.length - 1] - 1)
    if(areaWithTop > maxArea) {
      maxArea = areaWithTop
    }
  }

  return maxArea
}

console.log(largestHistogram([6, 2, 5, 4, 5, 1, 6]))
// => 12
