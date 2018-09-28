function sortColors(arr){
  var result = [];
  var count = [0, 0, 0];

  for(var i = 0; i < arr.length; i++){
    count[arr[i]] += 1;
  }

  for(var j = 0; j < count.length; j++){
    while(count[j] > 0){
      result.push(j)
      count[j] -= 1;
    }
  }
  return result;
}

console.log(sortColors([0, 1, 1, 2, 0, 2, 1, 0]));
