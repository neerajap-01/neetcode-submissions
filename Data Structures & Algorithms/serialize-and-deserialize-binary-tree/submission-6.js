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

class Codec {
    /**
     * Encodes a tree to a single string.
     *
     * @param {TreeNode} root
     * @return {string}
     */
    serialize(root) {
      let res = [];
      const preOrderTraversal = (node) => {
        if(!node) {
          res.push('#');
          return;
        }
        res.push(node.val);
        preOrderTraversal(node.left)
        preOrderTraversal(node.right)
      }
      preOrderTraversal(root);
      return res.join(',');
    }

    /**
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
      let arr = data.split(',');
      let p1 = 0;
      const preOrderTraversal = () => {
        if(arr[p1] === '#') {
            p1++
             return null
        };

        const node = new TreeNode(Number(arr[p1++]));
        node.left = preOrderTraversal();
        node.right = preOrderTraversal();
        return node;
      }

      return preOrderTraversal();
    }
}
