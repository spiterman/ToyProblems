function objShallowEqual(obj1, obj2) {
  if(Object.keys(obj1).length !== Object.keys(obj2).length ) {
    return false;
  }
  for(let k in obj1) {
    if(!(k in obj2) || obj1[k] !== obj2[k]) {
      return false
    }
  }
  return true;
}

// let a = {a: 1, b: 3}
// let b = {a: 1, b: 2}


// console.log(objShallowEqual(a, b))


module.exports = objShallowEqual;
