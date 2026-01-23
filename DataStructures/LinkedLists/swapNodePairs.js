function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
 }


 var swapPairs = function(head) {
    let firstNode = head
    let secondNode = firstNode ? firstNode.next : null
    let newHead = secondNode ? secondNode : firstNode
    let prevFirst = firstNode
    while (secondNode !== null) {
        firstNode.next = secondNode.next
        secondNode.next = firstNode
        firstNode = firstNode.next
        secondNode = firstNode === null ? null : firstNode.next
        prevFirst.next = secondNode === null ? firstNode : secondNode
        prevFirst = firstNode
    }

    return newHead

};