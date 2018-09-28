function permuteArray(arr){
  var result = [];

  for(var i = 0; i < arr.length; i++){
    if(result.length === 0){
      // If there is nothing in the result array, just push in first element
      result.push([arr[i]]);
    } else {
      // Create a temporary array
      var temp = [];

      // Loop through each permuted array in the results array
      for(var j = 0; j < result.length; j++){

        // Place the letter at index i in the original Array
        // at every location
        for(var k = 0; k <= result[j].length; k++){

          // Creates a copy of the permuted array result[j]
          var newPermutation = result[j].slice()

          // Splice inserts character arr[i] at index k in the newPermutation array
          newPermutation.splice(k, 0, arr[i]);

          // Append newPermutation to temp
          temp.push(newPermutation);
        }
      }
      // Reset result to the temp array
      result = temp;
    }
  }
  return result;
}

console.log(permuteArray([1, 2, 3, 4]))
