function largestPrimeFactor(n) {

  //List of primes in the memo
  var memo = {2: 2};

  //Limit of prime factors to test
  //Worst case scenario, n is p x p
  //Where p is prime
  var limit = Math.sqrt(n);

  //Thing we will return at the end
  var temp = 2;

  //Tests a number's primality
  //If prime, add to memo
  function isPrime(num){
    for(var k in memo){
      if(num % memo[k] === 0) return;
    }
    temp = num;
    memo[temp] = num;
  }


  var counter = temp;

  while(counter <= limit) {
    isPrime(counter);
    counter++;
  }

  return temp;
}

// largestPrimeFactor(600851475143);
