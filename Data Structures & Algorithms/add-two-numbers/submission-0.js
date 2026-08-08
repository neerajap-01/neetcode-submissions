/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} l1
     * @param {ListNode} l2
     * @return {ListNode}
     */
    addTwoNumbers(l1, l2) {
        let dummy = new ListNode();
        let newNode = dummy
        let carryFwd = 0;

        while(l1 && l2) {
            let sum = l1.val + l2.val + carryFwd;

            if(sum >= 10) {
                carryFwd = Math.floor((sum / 10) % 10) //Get tens value
                sum = sum % 10
            } else {
                carryFwd = 0
            }

            newNode.next = new ListNode(sum);
            newNode = newNode.next
            l1 = l1.next;
            l2 = l2.next; 
        }

        while(l1) {
            let sum = l1.val + carryFwd;

            if(sum >= 10) {
                carryFwd = Math.floor((sum / 10) % 10) //Get tens value
                sum = sum % 10
            } else {
                carryFwd = 0
            }

            newNode.next = new ListNode(sum);
            newNode = newNode.next
            l1 = l1.next;
        }

        while(l2) {
            let sum = l2.val + carryFwd;

            if(sum >= 10) {
                carryFwd = Math.floor((sum / 10) % 10) //Get tens value
                sum = sum % 10
            } else {
                carryFwd = 0
            }

            newNode.next = new ListNode(sum);
            newNode = newNode.next
            l2 = l2.next;
        }

        if(carryFwd > 0) {
            newNode.next = new ListNode(carryFwd)
        }

        return dummy.next;
    }
}
