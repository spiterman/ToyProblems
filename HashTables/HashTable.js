//Hashing Function
function makeHash(input, memory) {
  if(typeof input === 'number') return makeHash(String(input), memory);
  if (typeof input !== 'string') throw "Error, first argument must be a string or a number";
  if(typeof memory !== 'number') throw "Error, second argument must be an integer";

  var code = 0;
  var split = input.split('');

  split.forEach(function(item){
    code += item.charCodeAt(0);
  })

  return code % memory;
}

//HashTable Generator Function
function HashTable(size){
  if(typeof size !== 'number' || size % 1 !== 0 || size >= 0) return "Error, first argument must be a positive integer";
  var s = size;
  var storage = {};

  this.get = function(key){
    var result = makeHash(key, size);
    return storage[result];
  };

  this.put = function(key, value){
    var result = makeHash(key, size);
    storage[result] = value;
  };

}

HashTable.prototype.get = function(key){

}

HashTable.prototype.hello = function() {
  console.log('Hello World')
}

var h = new HashTable(8);
console.log(h.size)
h.hello()


console.log(makeHash('abcdefgh', 15))

var a = 'a'
console.log()
