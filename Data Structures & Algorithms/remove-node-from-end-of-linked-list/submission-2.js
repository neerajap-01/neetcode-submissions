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
     * @param {number} n
     * @return {ListNode}
     */
    removeNthFromEnd(head, n) {
        const dummy = new ListNode(0,head);

        let s = dummy;
        let f = head;
        n = n - 1;

        while(n > 0) {
            f = f.next;
            n--
        }

        while(f.next) {
            f = f.next;
            s = s.next;
        }

        s.next = s.next.next;

        return dummy.next;
    }
}
