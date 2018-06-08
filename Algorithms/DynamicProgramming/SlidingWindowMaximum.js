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


function slidingWindowMaximum(arr, k){
  let deq = new Dequeue()

  let result = []

  for(let i = 0; i < k; i++) {
    while(deq.tail.prev.val !== Infinity && arr[i] >= arr[deq.tail.prev.val]) {
      deq.removeFromTail()
    }
    deq.addToTail(i)
  }

  let slow = 0
  let fast = k

  for(fast; fast <= arr.length; fast++) {
    result.push(arr[deq.head.next.val])

    if(arr[slow] >= arr[deq.head.next.val]) {
      deq.removeFromHead()
    }
    slow++

    while(arr[fast] >= arr[deq.tail.prev.val]) {
      deq.removeFromTail()
    }
    deq.addToTail(fast)
  }

  return result
}


console.log(slidingWindowMaximum([1, 2, 3, 1, 4, 5, 2, 3, 6], 3))

console.log(slidingWindowMaximum([8, 5, 10, 7, 9, 4, 15, 12, 90, 13], 4))
