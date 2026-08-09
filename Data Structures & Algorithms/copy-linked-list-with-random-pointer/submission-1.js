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

        let list = head;

        while(list){
            const newNode = new Node(list.val);
            hashMap.set(list,newNode);
            list = list.next;
        }

        list = head
        while(list) {
            const newNode = hashMap.get(list);
            newNode.next = hashMap.get(list.next);
            newNode.random = hashMap.get(list.random);
            list = list.next;
        }

        return hashMap.get(head);
    }
}
