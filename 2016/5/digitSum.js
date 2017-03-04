//Digit Sum
//Add the digits in a number

function digitSum (n) {
  return String(n)
      .split('')
      .reduce((x, y) => Number(x) + Number(y));
}
