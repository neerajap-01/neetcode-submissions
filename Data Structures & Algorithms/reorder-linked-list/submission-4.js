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

    reverseList(head) {
        let cur = head;
        let prev = null;

        while(cur) {
            const temp = cur;
            cur = cur.next;
            temp.next = prev;
            prev = temp
        }

        return prev;
    }

    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let s = head;
        let f = head;

        while (f && f.next) {
            s = s.next;
            f = f.next.next;
        }

        let second = this.reverseList(s.next);
        s.next = null;

        let first = head;

        while(second) {
            const temp1 = first.next;
            const temp2 = second.next;

            first.next = second;
            second.next = temp1;

            first = temp1
            second = temp2
        }

        return head;
    }
}
