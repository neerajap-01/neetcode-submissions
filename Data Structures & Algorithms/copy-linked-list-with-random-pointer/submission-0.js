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
        let curr = head;
        

        while(curr) {
            const newNode = new Node(curr.val);
            hashMap.set(curr,newNode);
            curr = curr.next;
        };

        curr = head;
        while(curr) {
            const newNode = hashMap.get(curr);
            newNode.next = hashMap.get(curr.next);
            newNode.random = hashMap.get(curr.random);

            curr = curr.next;
        }
        return hashMap.get(head);
    }
}
