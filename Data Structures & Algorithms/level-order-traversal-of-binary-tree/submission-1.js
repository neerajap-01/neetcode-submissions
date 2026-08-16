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
        if(!root) return []

        const res = [];
        let queue = [root];

        while(queue.length) {
            const temp = [...queue];
            queue = []

            const values = [];

            for(let node of temp) {
                values.push(node.val);

                if(node.left) queue.push(node.left);
                if(node.right) queue.push(node.right);
            }

            res.push(values)
        }

        return res;
    }
}
