function reverseChunks(arr, k) {
  // YOUR WORK HERE
  let index = 0;
  for(var i = 0; i < arr.length; i++) {
    if(i % k === k - 1) {
      reverse(arr, index, i);
      index = i + 1;
    }
  }
    reverse(arr, index, arr.length - 1);
  return arr;
}

function reverse(arr, i, j) {
  while(i < j) {
    [arr[i],arr[j]] = [arr[j],arr[i]]
    i++
    j--
  }
}

module.exports = reverseChunks;
