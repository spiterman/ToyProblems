/*
Write a function that raises a base to an exponent that runs in logarithmic time
*/

function Power(base, exponent) {
  if(!Number.isInteger(exponent)) {
    return 'This function cannot handle roots';
  }
  if(exponent < 0){
    return 1/Power(base, -exponent);
  }
  if(exponent === 0){
    return 1;
  }
  if(exponent % 2 === 0){
    return Power(base * base, exponent/2);
  }
  return base * Power(base * base, (exponent - 1)/2);
}

// Clever Implementation
// const Power = (base, exponent) => !exponent? 1 : exponent % 2 ? base * Power(base, exponent - 1) : Power(base * base, exponent/2);

// console.log(Power(5, 2))


module.exports = Power;
