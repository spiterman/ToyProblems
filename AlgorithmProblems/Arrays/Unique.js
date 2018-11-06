function unique(arr) {
  let set = {};
  let result = [];

  arr.forEach((item) => {
    set[item] = true;
  });
  for(let key in set) {
    result.push(Number(key));
  }
  return result;
}

console.log(unique([1, 2, 3, 4, 4, 3, 2, 1]));

module.exports = unique;
