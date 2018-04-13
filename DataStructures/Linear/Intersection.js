// function getIntersectionNode (headA, headB) {
//   let lenA = length(headA);
//   let lenB = length(headB);
//
//   // move headA and headB to the same start point
//   while (lenA > lenB) {
//     headA = headA.next;
//     lenA--;
//   }
//   while (lenA < lenB) {
//     headB = headB.next;
//     lenB--;
//   }
//
//   // find the intersection until end
//   while(headA !== headB) {
//     headA = headA.next;
//     headB = headB.next;
//   }
//   return headA;
// };

function getIntersectionNode(headA, headB) {
  let currentA = headA;
  let currentB = headB;

  while(currentA != currentB) {
    currentA = currentA ? currentA = currentA.next : headB
    currentB = currentB ? currentB = currentB.next : headA
  }
  return currentA;

}


function ListNode(val) {
  this.val = val;
  this.next = null;
}

function length (head) {
  let count = 0;
  while(head !== null) {
    head = head.next;
    count++;
  }
  return count;
}

// Test Cases
let a1 = new ListNode('a1');
let a2 = new ListNode('a2');
let a3 = new ListNode('a3');

let b1 = new ListNode('b1');
let b2 = new ListNode('b2');

let c1 = new ListNode('c1');
let c2 = new ListNode('c2');
let c3 = new ListNode('c3');

a1.next = a2;
a2.next = a3;
a3.next = c1;

b1.next = b2;
b2.next = c1;

c1.next = c2;
c2.next = c3;

let c4 = new ListNode('c4');

console.log(getIntersectionNode(a1, b1)); // => c1
console.log(getIntersectionNode(a1, c4)); // => null
