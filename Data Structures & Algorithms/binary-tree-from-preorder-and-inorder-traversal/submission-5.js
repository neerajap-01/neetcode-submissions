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
      for(let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i)
      }
      let p1 = 0;
      const bfs = (start, end) => {
        if(start > end) return null;
        const node = new TreeNode(preorder[p1++]);
        const rootIndex = map.get(node.val);
        node.left = bfs(start, rootIndex - 1);
        node.right = bfs(rootIndex + 1, end);
        return node
      }
      return bfs(0, inorder.length - 1);
    }
}
