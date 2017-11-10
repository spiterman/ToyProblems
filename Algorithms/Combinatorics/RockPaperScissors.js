function rockPaperScissors(rounds) {
  let result = [];

  function recurse(substr, depth) {
    if(depth >= rounds) {
      return result.push(substr);
    }
    recurse(substr + 'r', depth + 1);
    recurse(substr + 'p', depth + 1);
    recurse(substr + 's', depth + 1);
  }

  recurse('', 0);
  return result;
}

console.log(rockPaperScissors(4));

module.exports = rockPaperScissors;
