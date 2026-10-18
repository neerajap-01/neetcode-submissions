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
     * @return {number[][]}
     */
    levelOrder(root) {
        const res = [];
        if(!root) return res;

        let queue = [root];

        while(queue.length) {
            const nextQueue = [];
            const values = [];

            for(let i = 0; i < queue.length; i++) {
                const node = queue[i];
                values.push(node.val);
                if(node.left) nextQueue.push(node.left);
                if(node.right) nextQueue.push(node.right);
            }

            res.push(values);
            queue = nextQueue;
        }

        return res;
    }
}
