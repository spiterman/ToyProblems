var findPrime = function(n) {
  var memo = {1: 2, 2:3}
  var count = 2;

  function isPrime(num){
    var limit = Math.max(Math.sqrt(num), memo[count])

    for(var k in memo){
      if(num % memo[k] === 0){ return false }
    }
    count++
    memo[count] = num;
    return true;
  }

  var num = 2

  while(count <= n){
    isPrime(num)
    num++
  }

  return memo[n];
}

console.log(findPrime(10001))
