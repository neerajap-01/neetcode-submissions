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
     * @param {ListNode} head
     * @return {boolean}
     */
    hasCycle(head) {
        if(!head) return false;

        let fast = head.next;
        let slow = head;

        while(slow.next && fast.next) {
            if(fast.val === slow.val) return true;

            if(fast.next.next === null) return false

            fast = fast.next.next;
            slow = slow.next;
        }

        return false;
    }
}
