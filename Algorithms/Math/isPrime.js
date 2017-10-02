function isPrime(num){
 var limit = Math.sqrt(num)

 for(var i = 2; i <= limit; i++){
   if(num % i === 0) return false
 }

 return true;
}
