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
    merge(head, tail, left, right) {
        while (left && right) {
            if (left.val <= right.val) {
                if (!head) {
                    head = left;
                    tail = left;
                } else {
                    tail.next = left;
                    tail = tail.next;
                }
                left = left.next;
            } else {
                if (!head) {
                    head = right;
                    tail = right;
                } else {
                    tail.next = right;
                    tail = tail.next;
                }
                right = right.next
            }
        }

        if (left) {
            while (left) {
                tail.next = left;
                tail = tail.next;
                left = left.next;
            }
        }

        if (right) {
            while (right) {
                tail.next = right;
                tail = tail.next;
                right = right.next;
            }
        }

        return head;
    }
    
    mergeSort(head, tail, lists) {
        if(lists.length <= 1) return lists[0] || null;

        const mid = Math.round(lists.length/2);
        const left = this.mergeSort(head, tail, lists.slice(0,mid));
        const right = this.mergeSort(head, tail, lists.slice(mid,lists.length));

        return this.merge(head, tail, left, right);
    }
    /**
     * @param {ListNode[]} lists
     * @return {ListNode}
     */
    mergeKLists(lists) {
        let head = null, tail = null
        return this.mergeSort(head, tail, lists);
    }
}
