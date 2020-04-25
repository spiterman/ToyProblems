/**
https://leetcode.com/problems/add-two-numbers/submissions/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    if(l1 === null && l2 === null) {
        return null;
    }
    let head = new ListNode(0);
    let currentNode = head;
    let node1 = l1;
    let node2 = l2;
    let carry = 0;

    while(!(node1 === null && node2 === null)) {
        let node1Val = 0;
        let node2Val = 0;

        if(node1 !== null) {
            node1Val = node1.val;
            node1 = node1.next;
        }

        if(node2 !== null) {
            node2Val = node2.val;
            node2 = node2.next;
        }

        currentNode.val = (node1Val + node2Val + carry) % 10;

        if(node1Val + node2Val + carry >= 10) {
            carry = 1;
        } else {
            carry = 0;
        }
        if(!(node1 === null && node2 === null)) {
            currentNode.next = new ListNode(0);
            currentNode = currentNode.next;
        }
    }
    if(carry === 1) {
        currentNode.next = new ListNode(1);
    }

    return head;
};
