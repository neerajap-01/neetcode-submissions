// class Node {
//   constructor(val, next = null, random = null) {
//       this.val = val;
//       this.next = next;
//       this.random = random;
//   }
// }

class Solution {
    /**
     * @param {Node} head
     * @return {Node}
     */
    copyRandomList(head) {
        const hashMap = new Map([
            [null,null]
        ]);

        let cur = head;
        while(cur) {
            const newNode = new Node(cur.val)
            hashMap.set(cur,newNode);
            cur = cur.next;
        }

        cur = head;
        while(cur) {
            const newNode = hashMap.get(cur);
            newNode.next = hashMap.get(cur.next);
            newNode.random = hashMap.get(cur.random);
            cur = cur.next;
        }

        return hashMap.get(head);
    }
}
