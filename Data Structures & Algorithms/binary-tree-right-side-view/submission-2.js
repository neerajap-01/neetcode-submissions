/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number[]}
     */
    rightSideView(root) {
        if(!root) return [];
        
        const res = [];
        let queue = [root];

        while(queue.length) {
            const temp = [...queue];
            queue = []

            for(let node of temp) {
                if(node.left) queue.push(node.left)
                if(node.right) queue.push(node.right)
            }

            res.push(temp[temp.length - 1].val)
        }

        return res;
    }
}
