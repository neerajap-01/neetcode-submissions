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
     * @param {number[]} preorder
     * @param {number[]} inorder
     * @return {TreeNode}
     */
    buildTree(preorder, inorder) {
        if(inorder.length == 0) return null;

        const node = new TreeNode(preorder.shift());

        const targetIndex = inorder.indexOf(node.val);
        const left = inorder.slice(0,targetIndex);
        const right = inorder.slice(targetIndex+1);

        node.left = this.buildTree(preorder, left);
        node.right = this.buildTree(preorder, right);

        return node;
    }
}
