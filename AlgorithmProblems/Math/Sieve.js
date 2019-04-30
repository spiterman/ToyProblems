// https://stackoverflow.com/questions/2582732/time-complexity-of-sieve-of-eratosthenes-algorithm



// function countPrimes(n){
//   let primes = [];
//   let numbers = [];

//   for(let i = 0; i <= n; i++) {
//     numbers.push(true);
//   }

//   numbers[0] = false;
//   numbers[1] = false;

//   let upperBound = Math.floor(Math.sqrt(n));

//   for(let i = 2; i <= upperBound; i++) {

//     let isPrime = true;

//     for(let j = 0; j < primes.length; j++) {
//       let currentPrime = primes[j];
//       if(i % currentPrime === 0) {
//         isPrime = false;
//         break;
//       }
//     }

//     if(isPrime) {
//       primes.push(i);
//       for(let k = 2; k * i <= n; k++) {
//         console.log(k * i);
//         numbers[k * i] = false;
//       }
//     }

//   }

//   // console.log(primes)

//   let result = [];

//   for(let i = 0; i < numbers.length; i++) {
//     if(numbers[i]) {
//       result.push(i);
//     }

//   }
//   return result;
// }


function countPrimes(n){
  let primes = [];
  let numbers = [];

  for(let i = 0; i <= n; i++) {
    numbers.push(true);
  }

  numbers[0] = false;
  numbers[1] = false;

  let upperBound = Math.floor(n/2);

  for(let i = 2; i <= upperBound; i++) {

    let isPrime = true;

    for(let j = 0; j < primes.length; j++) {
      let currentPrime = primes[j];
      if(i % currentPrime === 0) {
        isPrime = false;
        break;
      }
    }

    if(isPrime) {
      primes.push(i);
      for(let p = 0; p < primes.length; p++) {

        let prime = primes[p];

        let composite = prime * i;

        while(composite < n) {
          numbers[composite] = false;
          composite *= prime;
        }
      }
    }


  }

  // console.log(primes)

  let result = [];

  for(let i = 0; i < numbers.length; i++) {
    if(numbers[i]) {
      result.push(i);
    }

  }
  return result;
}

countPrimes(101)
