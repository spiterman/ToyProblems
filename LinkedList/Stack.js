function Stack(size) {
  var maxSize = size || 10;
  var currentSize = 0;

  var storage = {};

  //Get properties operations
  var operations = {};

  operations.maxSize = function() {
    return maxSize;
  };

  operations.currentSize = function() {
    return currentSize;
  };

  operations.storage = function() {
    var result = [];

    for(var i = 0; i < currentSize; i++){
      result.push(storage[i]);
    }
    return result;
  };

  this.get = function(keyword) {
    return operations[keyword]();
  };

  //Adding/Removing Items

  this.addItem = function(item){
    storage[currentSize] = item;
    currentSize++;
  };

  this.removeItem = function(){
    if(currentSize <= 0) return ""

    delete(storage[currentSize - 1]);
    currentSize--;
  };


}
