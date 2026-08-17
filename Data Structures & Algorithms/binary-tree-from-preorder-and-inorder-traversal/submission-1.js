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
        const hashMap = new Map();

        for(let i = 0; i < inorder.length; i++) {
            hashMap.set(inorder[i], i);
        }

        let preOrderIndex = 0;

        const build = (left, right) => {
            if(left > right) return null;

            const node = new TreeNode(preorder[preOrderIndex++]);

            const mid = hashMap.get(node.val);

            node.left = build(left, mid - 1);
            node.right = build(mid + 1, right);

            return node;
        }

        return build(0, inorder.length - 1)
    }
}
