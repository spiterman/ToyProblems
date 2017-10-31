function ParensPermutations(num) {
  let result = [];

  function recurse(substr, left, right) {
    if(left === 0 && right === 0) {
      result.push(substr);
      return;
    } if (left === 0){
      recurse(substr + ')', left, right - 1);
    } else if(left < right) {
      recurse(substr + ')', left, right - 1);
      recurse(substr + '(', left - 1, right);
    } else {
      recurse(substr + '(', left - 1, right);
    }
  }
  recurse('', num, num);
  return result;
}

let result = ParensPermutations(4);
console.log(result)
