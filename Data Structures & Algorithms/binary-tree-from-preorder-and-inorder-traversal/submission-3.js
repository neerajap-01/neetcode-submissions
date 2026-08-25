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
        const map = {};
        inorder.map((val,idx) => map[val] = idx);

        let p1 = 0;

        const bfs = (start, end) => {
            if(start > end) return null;

            const node = new TreeNode(preorder[p1++]);

            let mid = map[node.val];

            node.left = bfs(start, mid - 1);
            node.right = bfs(mid + 1, end);

            return node;
        }

        return bfs(0, preorder.length - 1)
    }
}
