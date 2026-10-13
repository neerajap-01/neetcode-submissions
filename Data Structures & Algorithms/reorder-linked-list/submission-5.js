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
    reverse(head) {
        let cur = head, prev = null;
        while(cur) {
            const temp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = temp;
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

        while(f.next && f.next.next) {
            s = s.next;
            f = f.next.next;
        }

        let list2 = this.reverse(s.next);
        s.next = null;

        let list1 = head;
        while(list2) {
            const temp1 = list1.next;
            const temp2 = list2.next;

            list1.next = list2;
            list2.next = temp1;

            list1 = temp1;
            list2 = temp2;
        }
        return head;
    }
}
