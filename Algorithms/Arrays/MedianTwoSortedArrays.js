function medianTwoSorted(arr1, arr2) {
  let i = 0;
  let j = 0;

  while(i + j < arr1.length) {
    if(arr1[i] < arr2[j]) {
      i++;
    } else {
      j++;
    }
  }
  return i > j ? (arr1[i - 1] + arr2[j])/2 : (arr1[i] + arr2[j - 1])/2
}

console.log(medianTwoSorted([1, 12, 17, 26, 38, 70], [2, 13, 15, 30, 45, 60]))
