function NonConsecutiveOnes(n) {
  let result = [];

  function recurse(substr) {
    if(substr.length === n) {
      result.push(substr);
      return;
    }
    recurse(substr + 0);
    if(substr[substr.length - 1] !== "1") {
      recurse(substr + 1)
    }
  }

  recurse("");
  return result;
}


console.log(NonConsecutiveOnes(4));
