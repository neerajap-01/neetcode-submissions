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
     * @param {TreeNode} p
     * @param {TreeNode} q
     * @return {TreeNode}
     */
    lowestCommonAncestor(root, p, q) {
        let cur = root;

        while(cur) {
            if(cur.val > p.val && cur.val > q.val) {
                cur = cur.left
            } else if(cur.val < p.val && cur.val < q.val) {
                cur = cur.right
            } else {
                return cur
            }
        }
    }
}
