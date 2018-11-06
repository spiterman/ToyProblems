function square(num){
  return num * num;
};

function power(base, exponent){
  var result = 1;
  var exp = exponent;
  while(exp > 0){
    result *= base;
    exp--
  }
  return result;
};

function newSquare(base){
  return power(base, 2);
}

function fullName(firstName){
  return function(lastName){
    return 'Hello, my name is ' + firstName + ' ' + lastName + '. It is nice to meet you!';
  }
}

console.log(fullName('Sergey')('Piterman'));

// console.log(power(2, 3));
// console.log(newSquare(3));
