function allAnagrams (string) {
  // Write your code here, and
  // return your final answer.
  var firstResult = [[]];
  var finalResult = [];
  var split = string.split('');


  var addLettertoSingleCombination = function(arr, letter){
      var result = [];
      for(var i = 0; i < arr.length + 1; i++){  //length + 1 to add to the end of the array as well
        var copy = arr.slice();
        copy.splice(i, 0, letter);
        result.push(copy);
      }
      return result;
  };

//   console.log(addLettertoSingleCombination(['a'], 'c'))

  var addLettertoAllCombinations = function(combos, letter){
      var results = [];
      for(var i = 0; i < combos.length; i++){
          results = results.concat(addLettertoSingleCombination(combos[i], letter))
      }
      return results
  }


  console.log(addLettertoAllCombinations([['a', 'b'], ['b', 'a']], 'd'))


  for(var j = 0; j < split.length; j++){
      firstResult = addLettertoAllCombinations(firstResult, split[j]);
  }



  for(var i = 0; i < firstResult.length; i++){
      finalResult.push(firstResult[i].join(''))
  };


  return finalResult;
  return split;
  return finalResult
  return recurse(string);

}
