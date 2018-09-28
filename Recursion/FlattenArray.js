function flattenArray(arr) {
  let result = [];
  function recurse(a) {
    for(let i = 0; i < a.length; i++) {
      if(typeof a[i] === 'object') {
        recurse(a[i]);
      } else {
        result.push(a[i]);
      }
    }
  }
  recurse(arr, '')
  return result;
}

// let a = [1, [2, 3, [4, 5, 6, [7]]], [8, 9, 10, [11, 12]]];
// console.log(flattenArray(a));

module.exports = flattenArray;
