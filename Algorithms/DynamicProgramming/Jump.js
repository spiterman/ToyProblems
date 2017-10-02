function jump(arr){
  var cache = {0:0};

  for(var i = 0; i < arr.length; i++){
    var steps = arr[i];

    if(cache[arr.length - 1] !== undefined){
      return cache[arr.length - 1]
    }

    for(var j = 0; j <= steps; j++){

      if(cache[i + j] !== undefined){

        cache[i + j] = Math.min((cache[i] + 1), cache[i + j])

      } else {
        cache[i + j] = cache[i] + 1;
      }
    }
  }

  return cache[arr.length - 1];

}

console.log(jump([2, 1, 3, 1, 4, 1, 2, 0, 3, 2, 5]))
