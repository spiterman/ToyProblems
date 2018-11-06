var trailingZeroes = function(num) {
  let result = 0;
  let power = 1;

  while(Math.floor(num / Math.pow(5, power)) > 0) {
    result += Math.floor(num / Math.pow(5, power));
    power++
  }
  return result;
};

// Given a number, figure out how many trailing zeroes the factorial of that number will have
// http://www.purplemath.com/modules/factzero.htm
