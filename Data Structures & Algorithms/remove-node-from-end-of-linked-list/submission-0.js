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
        let bool = true;
        n = n-1;

        while(n){
            f = f.next;
            n--
            bool = false;
        }

        if(bool) return null;

        let prevNode = head;
        while(s && f){
            if(f.next == null) {
                prevNode.next = s.next
                break
            } else {
                prevNode = s;
                s = s.next;
                f = f.next;
            }
        }

        return head;
    }
}
