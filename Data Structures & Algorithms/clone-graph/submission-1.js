/**
 * // Definition for a Node.
 * class Node {
 *     constructor(val = 0, neighbors = []) {
 *       this.val = val;
 *       this.neighbors = neighbors;
 *     }
 * }
 */

class Solution {
    /**
     * @param {Node} node
     * @return {Node}
     */
    cloneGraph(node) {
        if(!node) return null;
        const visited = new Map();
        const dfs = (n) => {
            if(visited.has(n.val)) return visited.get(n.val);
            const newNode = new Node(n.val);
            visited.set(n.val, newNode)
            for(let ng of n.neighbors) {
                newNode.neighbors.push(dfs(ng))
            }
            return newNode;
        }
        return dfs(node)
    }
}
