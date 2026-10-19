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
    maxPathSum(root) {
      let max = -Infinity;
      const postOrderTraversal = (node) => {
        if(!node) return 0;

        let left = Math.max(0, postOrderTraversal(node.left));
        let right = Math.max(0, postOrderTraversal(node.right));

        max = Math.max(max, left + node.val + right);
        return (node.val + Math.max(left, right));
      }
      postOrderTraversal(root);
      return max;
    }
}
