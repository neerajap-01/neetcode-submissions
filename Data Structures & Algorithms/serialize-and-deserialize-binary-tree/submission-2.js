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

        const postOrderTraversal = (node) => {
            if(!node) {
                res.push("#")
                return;
            }

            res.push(node.val)
            postOrderTraversal(node.left);
            postOrderTraversal(node.right);
        }

        postOrderTraversal(root);

        return res.join(',');
    }

    /** 
     * Decodes your encoded data to tree.
     *
     * @param {string} data
     * @return {TreeNode}
     */
    deserialize(data) {
        const arr = data.split(',');
        let i = 0
        const postOrderTraversal = () => {
            const ele = arr[i++];

            if(ele === "#") return null;

            const node = new TreeNode(Number(ele));

            node.left = postOrderTraversal();
            node.right = postOrderTraversal();

            return node;
        }

        return postOrderTraversal();
    }
}
