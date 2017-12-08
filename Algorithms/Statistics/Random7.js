function foo5() {
  return Math.floor(Math.random() * 5) + 1
}

function foo7() {
  let result = 5 * foo5() + foo5() - 5;
  if(result < 22) {
    return result % 7 + 1;
  }
  return foo7();
}

function test(num) {
  let result = {};
  while (num > 0) {
    let n = foo7();
    result[n] ? result[n] += 1 : result[n] = 1;
    num--;
  }
  return result;
}

console.log(test(10000000));

module.exports = foo7;
