// Sum Square Difference
// Finds the difference between the square of the sum, and the sum of the squares

var sumSquareDifference = function(n){

  var square = function(x){
    return x * x
  }

  var num1 = 0;
  var num2 = 0;

  for(var i = 1; i <= n; i++){
    num1 += square(i)
  }

  for(var j = 1; j <= n; j++){
    num2 += j
  }
  num2 = square(num2)

  return num2 - num1

}
console.log(sumSquareDifference(100))
