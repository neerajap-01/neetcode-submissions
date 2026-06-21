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
     * @param {ListNode} list1
     * @param {ListNode} list2
     * @return {ListNode}
     */
    mergeTwoLists(list1, list2) {
        let l1 = list1, l2 = list2;
        let head = new ListNode();
        let currentHead = head;
        while (l1 && l2) {
            if (l1.val < l2.val) {
                currentHead.next = l1;
                l1 = l1.next;
            } else {
                currentHead.next = l2
                l2 = l2.next;
            }

            currentHead = currentHead.next;
        }

        currentHead.next = l1 ? l1 : l2

        return head.next;
    }
}
