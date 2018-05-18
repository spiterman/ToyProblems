// function getMaxRectangle(hist) {
//   let stack = [];
//   let maxArea = 0;
//   for(let i = 0; i < hist.length; i++) {
//     let currentHeight = hist[i];

//     if(stack.length === 0 || currentHeight > hist[stack[stack.length - 1][0]]) {
//       stack.push([i, currentHeight]);
//     } else {

//         while(stack.length > 0) {
//           let index, currentArea;
//           [index, currentArea] = stack.pop();
//           let rightArea = (hist.length - index - 1) * hist[index];
//           maxArea = Math.max(maxArea, currentArea + rightArea); //Updates the maxArea if the current area is larger
//         }

//         let elemsLeft;
//         if(stack.length > 0) {
//           elemsLeft = (i - stack[stack.length - 1][0])
//         } else {
//           elemsLeft = i + 1;
//         }

//         stack.push([i, elemsLeft * currentHeight])
//     }
//   }


//   while(stack.length > 0) {
//     let index, currentArea;
//     [index, currentArea] = stack.pop();
//     let rightArea = (hist.length - index - 1) * hist[index];
//     maxArea = Math.max(maxArea, currentArea + rightArea); //Updates the maxArea if the current area is larger
//   }

//   return maxArea;
// }

// console.log(getMaxRectangle([2, 3, 4, 5, 6]))
// console.log(getMaxRectangle([6, 5, 4, 3, 2]))


function largestRectangleArea(histogram) {
  let stack = [];
  let maxArea = 0;
  let i;
  let topOfStack;
  let area;

  if(histogram.length === 1) {
    return histogram[0]
  }

  for(i = 0; i < histogram.length; i++) {
    topOfStack = stack[stack.length - 1];

    if(stack.length === 0 || histogram[i] >= histogram[topOfStack]) {
      stack.push(i); //If all ascending, or stack empty, keep pushing onto stack
    } else {
      while(stack.length > 0 && histogram[i] < histogram[topOfStack]) {

        if(stack.length === 0){
          area = histogram[topOfStack] * i;
        } else {
          area = histogram[topOfStack] * (i - topOfStack - 1)
        }
        maxArea = Math.max(maxArea, area);
        topOfStack = stack.pop() //returns the most recent index
      }
      stack.push(i);
    }
  }
  // Clear the rest of the stack
  while(stack.length) {
    if(stack.length === 0){
      area = histogram[topOfStack] * i;
    } else {
      area = histogram[topOfStack] * (i - topOfStack)
    }
    maxArea = Math.max(maxArea, area);
    topOfStack = stack.pop();
  }


  return maxArea;
}

// console.log(largestRectangleArea([5, 2]))



function findLargestRectangle(hist) {
  var h, pos, tempH, tempPos, tempSize = 0, maxSize = 0
  var hStack = [], pStack = []

  for(pos = 0; pos < hist.length; pos++) {
    h = hist[pos]
    if(hStack.length === 0 || h > hStack[hStack.length - 1]) {
      hStack.push(h); pStack.push(pos);
    } else if(h < hStack[hStack.length - 1]) {
      while(hStack.length && h < hStack[hStack.length - 1]) {
        tempH = hStack.pop();
        tempPos = pStack.pop();
        tempSize = tempH * (pos - tempPos)
        maxSize = Math.max(tempSize, maxSize);
      }
      hStack.push(h);
      pStack.push(tempPos)
    }
  }
  while(hStack.length) {
    tempH = hStack.pop();
    tempPos = pStack.pop();
    tempSize = tempH * (pos - tempPos)
    maxSize = Math.max(tempSize, maxSize);
  }
  return maxSize
}

console.log(findLargestRectangle([5, 2]))
