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
        const posOrderTraversal = (root) => {
            if(!root) return 0;

            const left = posOrderTraversal(root.left);
            if(left == -1) return -1;

            const right = posOrderTraversal(root.right);
            if(right == -1) return -1;

            let isValid = Math.abs(left - right) <= 1;

            if(!isValid) return -1;
            return isValid ? Math.max(left,right) + 1 : -1
        };

        return posOrderTraversal(root) != -1
    }
}
