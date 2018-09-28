function capitalPermutationsAdvanced(S) { //Given a string of letters containing uppercase, lowercase and numbers
    let result = [];

    function recurse(substr, depth) {
        if(depth === S.length) {
            result.push(substr);
            return;
        }
        if(!isNaN(S[depth])) {
            recurse(substr + S[depth], depth + 1)
        } else if(S[depth] == S[depth].toUpperCase()) {
            recurse(substr + S[depth].toLowerCase(), depth + 1);
            recurse(substr + S[depth], depth + 1);
        } else {
            recurse(substr + S[depth].toUpperCase(), depth + 1);
            recurse(substr + S[depth], depth + 1);
        }
    }
    recurse("", 0)
    return result;
};



function captialPermutationsBasic(str) {  //Given a string of letters in lowercase
  let result = [];

  function permute(substr, depth) {
    if(depth === str.length) {
      result.push(substr);
      return;
    }
    permute(substr + str[depth], depth + 1);
    permute(substr + str[depth].toUpperCase(), depth + 1);
  }

  permute("", 0);

  return result;
}

console.log(capitalPermutationsAdvanced("abc"));
