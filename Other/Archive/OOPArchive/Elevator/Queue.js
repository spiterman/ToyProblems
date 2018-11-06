let ListNode = require("./ListNode");

class Queue {

  constructor() {
    this.head = new ListNode(-Infinity);
    this.tail = new ListNode(Infinity); // this way we always have nodes
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }

  // Some Code Duplication here
  insertFromFront(floorNumber) {
    let current = this.head;
    while(current.val < floorNumber) {
      current = current.next;
    }
    if(current.val === floorNumber) {
      return false;
    }
    let newNode = new ListNode(floorNumber);
    current.prev.next = newNode;
    current.prev = newNode;
  }

  insertFromBack(floorNumber) {
    let current = this.tail;
    while(current.val > floorNumber) {
      current = current.prev;
    }
    if(current.val === floorNumber) {
      return false;
    }
    let newNode = new ListNode(floorNumber);
    current.next.prev = newNode;
    current.next = newNode;
  }
}

module.exports = Queue;
