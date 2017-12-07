function sortBitArray(arr) {
  let back = 0;
  let front = arr.length - 1;

  while(back < front) {
    if(arr[back] === 1 && arr[front] === 0){
      [arr[back], arr[front]] = [arr[front], arr[back]];
    }
    if(arr[back] === 0){
      back++;
    }
    if(arr[front] === 1){
      front--
    }
  }
  return arr;
}

function sortBits(arr) {
  let i = 0;
  let j = 0;

  while(j < arr.length) {
    if(arr[j] === 0) {
      arr[j] = 1
      arr[i] = 0
      i++
    }
    j++
  }
  return arr;
}

// console.log(sortBits([0, 1, 1, 1, 0, 0, 1]))

// console.log(sortBitArray([0, 1, 0, 1, 1, 0]));
