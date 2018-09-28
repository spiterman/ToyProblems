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
