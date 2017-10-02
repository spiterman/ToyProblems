function Triangular(n) {
  var maxCheck = Math.sqrt(n/2)
  //Only need to check up to sqrt(n/2)
  //Because as n -> Infinity
  //And if n = a^2 + b^2
  //Where a and b are triangular
  //And a < b
  //Then a -> b

  var memo = {"1" : 1};
  var index = 2;

  while(index <= maxCheck) {
    var last = memo[index - 1];
    var next = last + index;
    if(Math.pow(last, 2) + Math.pow(next, 2) === n){
      return true;
    }
    memo[index] = next;
    index++;
  }
  return false;

}
