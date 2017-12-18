function Telephone(num) {
  let result = [];
  let keys = {1: [" "],
              2: ["A", "B", "C"],
              3: ["D", "E", "F"],
              4: ["G", "H", "I"],
              5: ["J", "K", "L"],
              6: ["M", "N", "O"],
              7: ["P", "Q", "R", "S"],
              8: ["T", "U", "V"],
              9: ["W", "X", "Y", "Z"],
              0: [" "]}

  let n = String(num);

  function recurse(substr, depth) {
    if(depth >= n.length) {
      result.push(substr);
      return;
    }
    for(let i = 0; i < keys[n[depth]].length; i++) {
      recurse(substr + keys[n[depth]][i], depth + 1);
    }

  }

  recurse("", 0);

  return result;
}

// console.log(Telephone(3646));

module.exports = Telephone;
