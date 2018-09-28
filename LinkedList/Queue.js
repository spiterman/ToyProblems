var Queue = function() {

  var storage = {};
  var size = 0;
  var currentIndex = 0;

  this.enqueue = function(item) {
    storage[currentIndex] = item;
    size++;
    currentIndex++;
  };

  this.dequeue = function() {
    if(size > 0){
      var result = storage[currentIndex - size];
      delete storage[currentIndex - size];
      size--;
      return result;
    }
    console.error('The queue is empty');
  };

  this.showQueueValues = function() {
    var result = [];
    var start = currentIndex - size;
    while(start < currentIndex){
      result.push(storage[start]);
      start++;
    }

    return result;
  };

  // This is so the size can't just be manipulated directly
  this.size = function() {
    return size;
  };

  //Like dequeue, but doesn't remove the
  this.peek = function() {
    return storage[currentIndex - size];
  };

  this.findIndex = function(n) {
    if (n >= 0 && n < size) {
      return storage[currentIndex - (size - n)];
    }

    return console.error('Index given is out of range');
  };

  this.containsValue = function(val) {
    for(var key in storage) {
      if (val === storage[key]) {
        return true;
      }
    }
    return false;
  };

  this.containsKey = function(k) {
    if(typeof k !== 'string'){
      return console.error('The argument given must be a string')
    }
    for (var key in storage) {
      console.log(key)
      console.log(k)
      if(k === key){
        return true;
      }
    }
    return false;
  };

};
