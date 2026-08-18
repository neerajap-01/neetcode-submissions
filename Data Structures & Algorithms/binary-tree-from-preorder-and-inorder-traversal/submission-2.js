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
        const map = new Map();
        for(let i = 0; i < inorder.length; i++){
            map.set(inorder[i], i)
        }

        let preorderIndex = 0;

        const build = (left, right) => {
            if(left > right) return null;

            const node = new TreeNode(preorder[preorderIndex++]);

            const mid = map.get(node.val);

            node.left = build(left, mid - 1);
            node.right = build(mid + 1, right);

            return node;
        }

        return build(0, inorder.length - 1);
    }
}
