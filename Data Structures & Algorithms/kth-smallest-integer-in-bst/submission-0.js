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
     * @param {number} k
     * @return {number}
     */
    kthSmallest(root, k) {
        let res = null;

        const inOrderTraversal = (node) => {
            if(!node || res) return;

            inOrderTraversal(node.left);
            k--
            if(k == 0) {
                res = node.val;
                return;
            };
            inOrderTraversal(node.right);
        }

        inOrderTraversal(root);

        return res;
    }
}
