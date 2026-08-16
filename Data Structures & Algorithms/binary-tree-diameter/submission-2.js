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
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let max = 0;

        const postOrderTraversal = (node) => {
            if(!node) return 0;

            const left = postOrderTraversal(node.left);
            const right = postOrderTraversal(node.right);

            max = Math.max(max, left+right);

            return Math.max(left,right) + 1;
        }

        postOrderTraversal(root);

        return max;
    }
}
