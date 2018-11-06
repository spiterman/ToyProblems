function Node (val) {
    // TODO
    var obj = {};
    obj.value = val || null;
    obj.next = null;
    return obj;
}

var a = Node('a');
var b = Node('b');
var c = Node('c');
var d = Node('d');
var e = Node('e');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = b;


var hasCycle = function(linkedList){
  //Your beautiful code here

  var slow = linkedList;
  var fast = linkedList.next;

  while(fast){
      if()

  }


    return false;
};
