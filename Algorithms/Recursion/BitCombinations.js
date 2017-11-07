function BitCombinations(num) {
  let result = [];
  function helper(bits, depth) {
    if (depth === 0) {
      result.push(bits);
      return;
    }
    helper(bits + 0, depth - 1);
    helper(bits + 1, depth - 1);
  }
  helper('', num)
  return result;
}

console.log(BitCombinations(2));
// [ '00', '01', '10', '11' ]
console.log(BitCombinations(3));
// [ '000', '001', '010', '011', '100', '101', '110', '111' ]

module.exports = BitCombinations;
