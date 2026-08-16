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
    isValidBST(root) {
        const preOrderTraversal = (node, max, min) => {
            if(!node) return true;

            if(max <= node.val || min >= node.val) return false;

            return preOrderTraversal(node.left, node.val, min) && preOrderTraversal(node.right, max, node.val)
        }

        return preOrderTraversal(root, Infinity, -Infinity)
    }
}
