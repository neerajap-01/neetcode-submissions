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
        let str = "";

        const postOrderTraversal = (node) => {
            if(!node) {
                str += "#,"
                return;
            }

            str += `${node.val},`;

            postOrderTraversal(node.left);
            postOrderTraversal(node.right);
        }

        postOrderTraversal(root);

        return str;
    }

    /** 
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const postOrderTraversal = (arr) => {
            const ele = arr.shift();
            if(ele === "#") return null;

            const node = new TreeNode(ele);

            node.left = postOrderTraversal(arr);
            node.right = postOrderTraversal(arr);

            return node;
        }

        return postOrderTraversal(data.split(','));
    }
}
