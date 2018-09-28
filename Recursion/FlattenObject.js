function flattenObject(obj) {
  let result = {};
  function recurse(o, substr) {
    for(let key in o) {
      let resultKey = substr.length === 0 ? key : `${substr}.${key}`;
      if(typeof o[key] === 'object') {
        recurse(o[key], resultKey);
      } else {
        result[resultKey] = o[key];
      }
    }
  }
  recurse(obj, '')
  return result;
}

// let o = {a: {b : { c: 2 }}, d: 5, e: {f : 4} } ;
// console.log(flattenObject(o));

module.exports = flattenObject;
