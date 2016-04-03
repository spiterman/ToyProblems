// Sum Primes
// Sums all the prime numbers below a given number as input

var isPrime = function(n){
  for(var i = 2; i <= Math.sqrt(n); i++) {
    if(n % i === 0){
      return false;
    }
  }
  return true;
}

var sumPrimes = function(n){
  var result = [];

  for(var i = 2; i < n; i++){
    if(isPrime(i)){
      result.push(i);
    }
  }

  return result.reduce(function(prev, curr){
    return prev + curr;
  })
}

console.log(sumPrimes(2000000))
