class Dequeue {
  constructor(){
    this.head = new ListNode(Infinity)
    this.tail = new ListNode(-Infinity)
    this.head.next = this.tail
    this.tail.prev = this.head
  }
  removeFromHead() {
    this.head.next = this.head.next.next
    this.head.next.prev = this.head
  }

  removeFromTail() {
    this.tail.prev = this.tail.prev.prev
    this.tail.prev.next = this.tail
  }
  addToTail(val) {
    let newNode = new ListNode(val)
    newNode.prev = this.tail.prev
    this.tail.prev.next = newNode
    this.tail.prev = newNode
  }
}

class ListNode {
  constructor(val) {
    this.val = val
    this.next = null
    this.prev = null
  }
}
