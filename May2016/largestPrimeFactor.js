(function largestPrimeFactor(n) {
  if(n <= 1) return n;

  //List of primes in the memo
  var memo = {2:2};

  //Limit of prime factors to test
  //Worst case scenario, n is p x p
  //Where p is prime
  var totalLimit = Math.sqrt(n);

  //Thing we will return at the end
  var temp = 2;


  //Tests a number's primality
  //If prime, add to memo
  function isPrime(num){
    //Checks the memo
    var limit = Math.sqrt(num);
    var counter = 2;
    while(counter <= limit){
      if(num % counter === 0) return false;
      counter++;
    }
    return true;
  }

  var findNextPrime = function(){
    temp++;
    if(isPrime(temp)) return temp;
    findNextPrime();
  }

  var recurse = function(num){
    if(num === 1){
      return temp;
    }

    if()

    for(var k in memo){
      if(num % memo[k] === 0){
        recurse
      }

    }

  }


  var counter = temp;

  // while(counter <= limit) {
  //  isPrime(counter);
  //  counter++;
  // }

  if(temp === 1 || temp === n){
    return n;
  }



})(16)



//First we test 2
//If it works, keep testing 2s
//Then we check 3
//If prime, check it
//Keep going until you get to square root of the large number
//IF the number left at that point is a 1 return temp
//Else return number
