// Nodes
function Node(val) {
  this.val = val;
  this.prev = null;
  this.next = null;
};

Node.prototype.setVal = function(newVal){
  this.val = newVal;
};

// Linked List
function DblLinkedList(arr) {
  this.head = null;
  this.tail = null;
  this.size = 0;
  if(arr !== undefined){
    var lst = this;
    arr.forEach((item) => {
      lst.add(item);
    });
  };
};


DblLinkedList.prototype.add = function(item) {
  var n = new Node(item);

  if(this.size === 0) {
    this.head = n;
    this.tail = n;
  } else {
    var oldTail = this.tail;
    this.tail = n;
    oldTail.next = this.tail;
    this.tail.prev = oldTail;
  }
  this.size++;
}

DblLinkedList.prototype.each = function(callback){
  var start = this.head;

  function recurse(node){
    if(node !== null){
      callback(node);
      recurse(node.next);
    }
  };
  recurse(start);
}

DblLinkedList.prototype.remove = function(value, count){
  var lst = this;
  var i = 0;

    lst.each(function(node){
      if(count === undefined || count > i){
        if(node.val === value){
          if(lst.size === 1){
          // Size of 1 Linked List
            lst.head = null;
            lst.tail = null;
          } else if(node === lst.head){
            // Handle Head Case
              lst.head = lst.head.next;
              lst.head.prev = null;
          } else if(node === lst.tail){
            // Handle Tail Case
              lst.tail = lst.tail.prev;
              lst.tail.next = null;
          } else {
            // Handle Every other case
            node.prev.next = node.next;
            node.next.prev = node.prev;
          }
          lst.size--;
          i++;
        }
      }
    });
}


DblLinkedList.prototype.containsLoop = function(){
  var tortoise = this.head;
  var hare = this.head;
  var go = false;

  while(hare !== null){
    if(hare === tortoise){
      return true;
    }
    hare = hare.next;
    if(go){
      tortoise = tortoise.next;
    }
    go = !go;
  }
  return false;
};



//Unit Testing

var a = new DblLinkedList();

//Testing the Add Function
a.add(1);
a.add(2);
a.add(5);
a.add(2);
a.add(3);



//Testing the Head
console.log('This is the head, it should be "1": ', a.head.val)

//Testing the Tail
console.log('This is the tail, it should be "3": ', a.tail.val)

//Testing the Each Function

a.each(function(item){
  console.log('Here is the value: ', item.val)
})

// Testing the Remove Function
a.remove(2, 1);
a.remove(3);
a.remove(5);

a.each(function(item){
  console.log('Here is the value: ', item.val)
})
