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

        let s = head;
        let f = head.next;

        while(s.next && f.next) {
            if(s.val == f.val) return true

            if(f.next.next == null) return false;

            s = s.next;
            f = f.next.next;
        } 

        return false;
    }
}
