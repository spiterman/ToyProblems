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

// console.log(sortBitArray([0, 1, 0, 1, 1, 0]));
