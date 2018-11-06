function minSteps(n){

    function traverse(n){
        if (n === 1){
            return 0;
        }

        let steps = traverse(n - 1);

        if (n % 2 === 0){
            let stepsTwo = traverse(n / 2);
            steps = Math.min(steps, stepsTwo);
        }

        if (n % 3 === 0){
            let stepsThree = traverse(n / 3);
            steps = Math.min(steps, stepsThree);
        }

        return steps + 1;
    }


    return traverse(n);
}

// console.time('Recursion');
// console.log(minSteps(200));
// console.timeEnd('Recursion');


function minStepsMemo(n){
    let cache = {};
    function traverse(n){
        if (cache[n] !== undefined){
            return cache[n];
        }
        if (n === 1){
            return 0;
        }

        let steps = traverse(n - 1);

        if (n % 2 === 0){
            let stepsTwo = traverse(n / 2);
            steps = Math.min(steps, stepsTwo);
        }

        if (n % 3 === 0){
            let stepsThree = traverse(n / 3);
            steps = Math.min(steps, stepsThree);
        }

        cache[n] = steps + 1;
        return cache[n];
    }


    return traverse(n);
}

// console.time('Memoization: ');
// console.log(minStepsMemo(200));
// console.timeEnd('Memoization: ');

function minStepsTab(n){
    let result = [0, 0];

    for (let i = 2; i < n + 1; i++){
        let steps = result[i - 1];

        if(i % 2 === 0) {
            steps = Math.min(steps, result[i/2])
        }

        if(i % 3 === 0) {
            steps = Math.min(steps, result[i/3]);
        }
        result.push(steps + 1);
    }

    return result[n];
}

//
// console.time('Tabulation: ');
console.log(minStepsTab(405));
// console.timeEnd('Tabulation: ');


/*
Possible Constant space approach (Not Correct)

function minSteps(n) {
  let steps = 0;
  while(n > 1) {
    if((n > 3) && ((n - 1) % 3 === 0)) {
      n -= 1;
    } else if(n % 3 === 0) {
      n /= 3;
    } else if(n % 2 === 0){
      n /= 2;
    } else {
      n -= 1;
    }
    steps++
  }
  return steps;
}


function ms(n) {
  let table = [0, 0];

  for(let i = 2; i <= n; i++) {
    let result = table[i - 1];
    if(i % 2 === 0) {
      result = Math.min(result, table[i/2])
    }
    if(i % 3 === 0) {
      result = Math.min(result, table[i/3])
    }
    table.push(result + 1);
  }
  return table[n]
}

console.log(minSteps(400))
console.log(ms(400))
*/
