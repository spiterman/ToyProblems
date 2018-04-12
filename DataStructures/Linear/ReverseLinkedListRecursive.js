class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let a = new ListNode(1)
let b = new ListNode(3)
let c = new ListNode(5)
let d = new ListNode(7)

a.next = b
b.next = c
c.next = d

function printForward(node) {
  let current = node;
  while(current) {
    console.log(current.value)
    current = current.next
  }
}

// printForward(a)

function reverseLinkedList(node) {
  let newHead;

  function recurse(current) {
    if(current.next === null) {
      newHead = current;
      return current;
    }
    let prev = recurse(current.next);
    prev.next = current

    if(current === node) {
      current.next = null;
    }
    return current;
  }
  recurse(node)
  return newHead;
}



// let test =
reverseLinkedList(a)

console.log(d)
