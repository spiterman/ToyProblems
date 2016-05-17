//Largest Prime Factor
//Find the largest prime factor of a given input

  //largestPrimeFactor(2) --> 2
  //largestPrimeFactor(20) --> 5
  //largestPrimeFactor(21) --> 7

//Iterative Solution
function largestPrimeFactor(num) {

  var subNum = num;
  var test = 2;

  while(subNum > 1){
    subNum % test === 0? subNum = subNum/test : test++;
  }

  return test;
}

largestPrimeFactor(600851475143);

//Recursive Solution
//Note: May exceed maximum call stack size for large numbers

// function largestPrimeFactor(num) {

//  function recurse(subNum, test){
//    if(subNum === 1){
//      return test;
//    }
//    if(subNum % test === 0){
//      return recurse(subNum/test, test);
//    }
//    if(subNum % test !== 0){
//      return recurse(subNum, test + 1);
//    }
//  }

//  return recurse(num, 2);
// }
