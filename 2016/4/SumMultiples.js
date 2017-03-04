// Sum Multiples
// Sums all numbers that are divisible by 3 and 5

var sumMultiples = function(n){
  var result = [];
  var i = 0;

  while(i < n){
    if(i % 3 === 0 || i % 5 === 0){
      result.push(i);
    }
    i++
  }

  return result.reduce(function(prev, curr){
    return prev + curr
  })

}

console.log(sumMultiples(1000))
