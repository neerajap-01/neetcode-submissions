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
     * @return {void}
     */

    reverseList(list) {
        let curr = list;
        let prev = null;

        while(curr) {
            const temp = curr;
            curr = curr.next;
            temp.next = prev;
            prev = temp;
        }

        return prev
    }

    reorderList(head) {
        let s = head;
        let f = head;

        while(f && f.next) {
            f = f.next.next;
            s = s.next;
        }

        let newH = this.reverseList(s.next)
        s.next = null;

        let first = head;

        while(newH) {
            const temp1 = first.next;
            const temp2 = newH.next;

            first.next = newH;
            newH.next = temp1;

            first = temp1;
            newH = temp2;
        }
        return head
    }
}
