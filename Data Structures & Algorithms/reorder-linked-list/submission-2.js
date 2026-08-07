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
        reverseLinkedList(head) {
        let currNode = head;
        let prevNode = null;

        while(currNode) {
            const temp = currNode;
            currNode = currNode.next
            temp.next = prevNode;
            prevNode = temp
        }

        return prevNode;
    }

    /**
     * @param {ListNode} head
     * @return {void}
     */
    reorderList(head) {
        let s = head;
        let f = head;

        while(f && f.next) {
            s = s.next;
            f = f.next.next;
        };

        let second = this.reverseLinkedList(s.next);
        s.next = null; //break the node into 2 halves;

        let first = head;
        while (second) {
            const tmp1 = first.next;
            const tmp2 = second.next;
            first.next = second;
            second.next = tmp1;
            first = tmp1;
            second = tmp2;
        }

        return head;
    }
}
