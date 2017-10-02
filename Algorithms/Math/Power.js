/*
Write a function that raises a base to an exponent that runs in logarithmic time
*/

function Power(base, exponent) {
  if(exponent < 0){
    return 1/Power(base, -exponent);
  }
  if(exponent === 0){
    return 1;
  }
  if(exponent === 1){
    return base;
  }
  if(exponent % 2 === 0){
    return Power(base * base, exponent/2);
  }
  return base * Power(base * base, (exponent - 1)/2);
}


module.exports = Power;
