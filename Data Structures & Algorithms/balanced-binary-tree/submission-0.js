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
     * @return {boolean}
     */
    isBalanced(root) {
        const postOrderTraversal = (root) => {
            if(!root) return 0;

            const left = postOrderTraversal(root.left);
            const right = postOrderTraversal(root.right);

            if(left == -1 || right == -1) return -1;

            return Math.abs(left - right) <= 1 ? Math.max(left,right) + 1 : -1 
        }

        return postOrderTraversal(root) != -1
    }
}
