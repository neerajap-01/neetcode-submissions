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
        let s = head;
        let f = head;
        n--;
        while(n > 0) {
            f = f.next;
            n--
        }

        let prev = null;
        while(f.next) {
            prev = s;
            s = s.next;
            f = f.next;
        }
        if(prev) {
            prev.next = s.next;
        } else {
            head = head.next;
        }
        return head;
    }
}
