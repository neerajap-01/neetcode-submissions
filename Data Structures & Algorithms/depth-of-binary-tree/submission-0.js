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
    maxDepth(root, count = 0) {
        if(!root) return count;
        
        const leftCount = this.maxDepth(root.left,count+1);
        const rightCount = this.maxDepth(root.right,count+1);

        return Math.max(leftCount,rightCount);
    }
}
