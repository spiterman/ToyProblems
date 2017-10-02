/*
PowerDigit Sum
Find the sum of the digits of 2^1000
This problem was challenging because JS has a hard time with very large numbers
The solution I cam across was to use strings to store the large numbers, and loop through them one index at a time, converting the index to a Number, performing the multiplication, and turning it back into a string.
*/

//IFF Wrapper
(function() {

//Curried function
//Performs all the string processing for large numbers
function multiplyLarge(numSmall) {
  return function(numLarge){
    var str = numLarge.toString();
    var carryOver = 0;
    var result = '';
    for(var i = str.length - 1; i >= 0; i--){
      var n = Number(str[i]);
      var temp = n * numSmall + carryOver;
      result = temp % 10 + result;
      carryOver = ((temp % 100) - (temp % 10)) /10;
    }
    if(carryOver) return carryOver + result;
    return result;
  };
}

//Iteratively generates 2^1000
var multiplyLargeBy2 = multiplyLarge(2);
var counter = 0;
var product = 1;

while(counter < 1000){
  product = multiplyLargeBy2(product);
  counter++;
}

//Sums the digits of 2^1000
function sumDigits(numStr){
  var result = 0;
  for(var i = 0; i < numStr.length; i++){
    result += Number(numStr[i]);
  }
  return result;
}

console.log(sumDigits(product))

})();

