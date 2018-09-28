function convert(str) {
  // YOUR WORK HERE
  let counts = {}
  for(let i = 0; i < str.length; i++){
    counts[str[i]] ? counts[str[i]] += 1 : counts[str[i]] = 1;
  }
  let result = ""
  for(let key in counts) {
    result += counts[key] + key
  }
  return result;
}

// Tests
// console.log(convert("banana"))

module.exports = convert;
