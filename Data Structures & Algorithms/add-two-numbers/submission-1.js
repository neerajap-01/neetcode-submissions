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

        while(l1 != null || l2 != null || carryFwd > 0) {
            const inp1 = (l1 != null) ? l1.val : 0;
            const inp2 = (l2 != null) ? l2.val : 0;

            let sum = inp1 + inp2 + carryFwd;

            if(sum >= 10) {
                carryFwd = Math.floor((sum / 10)) //Get tens value
                sum = sum % 10
            } else {
                carryFwd = 0
            }

            newNode.next = new ListNode(sum);
            newNode = newNode.next


            if(l1 != null) l1 = l1.next;
            if(l2 != null) l2 = l2.next; 
        }

        return dummy.next;
    }
}
