function climbStairsMemo(steps){
  var memo = {};
  memo[-1] = 0;
  memo[0] = 1;
  memo[1] = 1;

  function helper(subSteps){
    if(memo[subSteps] !== undefined){
      return memo[subSteps]
    } else {
      var sum = helper(subSteps - 1) + helper(subSteps - 2) + helper(subSteps - 3);
      memo[subSteps] = sum;
      return sum
    }
  }

  helper(steps);

  return memo[steps];
}

function climbStairsTab(steps){
  var tab = [1, 1, 2];

  for(var i = 3; i <= steps; i++){
    tab.push(tab[i - 1] + tab[i - 2] + tab[i - 3])
  }
  return tab[steps]
}

function constantTimeFib(n){
  return round( (pow(goldenRatio(), n) - pow(- goldenRatio(), -n) )/sqrt5)
}

var pow = Math.pow
var round = Math.round
var sqrt5 = Math.sqrt(5);

function goldenRatio(){
  return (1 + Math.sqrt(5))/2
}

function tabFib(n){
  var tab = [0, 1];
  for(var i = 2; i <= n; i++){
    tab[i] = tab[i - 1] + tab[i - 2]
  }
  return tab[n];
}

// console.log(climbStairsMemo(1000))
// console.log(climbStairsTab(30))
console.time('tabFib');
console.log(tabFib(50));
console.timeEnd('tabFib');
console.time('constFib');
console.log(constantTimeFib(50))
console.timeEnd('constFib');

