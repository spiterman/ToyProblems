/*
Write a ForEach function that performs an operation on each element in a collection
Shoud work on arrays and objects
*/

function ForEach(collection, callback) {
  if(Array.isArray(collection)){
    for(let index = 0; index < collection.length; index++){
      callback(collection[index], index, collection);
    }
    return;
  }
  for(let key in collection) {
    callback(collection[key], key, collection);
  }
}


// Tests
// ForEach([1, 2, 3], (item) => console.log(item));
// ForEach({1:"a", 2:"b", 3:"c"}, (item) => console.log(item));

module.exports = ForEach;
