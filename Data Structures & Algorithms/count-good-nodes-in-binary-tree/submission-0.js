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
    goodNodes(root) {
        let counter = 0;

        const preOrderTraversal = (root, max) => {
            if(!root) return;

            if(max <= root.val) {
                counter++
                preOrderTraversal(root.left, root.val);
                preOrderTraversal(root.right, root.val);
            } else {
                preOrderTraversal(root.left, max);
                preOrderTraversal(root.right, max);
            }
        }  
        preOrderTraversal(root, root.val)

        return counter;
    }
}
