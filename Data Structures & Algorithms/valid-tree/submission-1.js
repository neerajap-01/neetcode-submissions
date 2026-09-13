class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(edges.length !== n - 1) return false

        const adj = new Map();
        for(let [e1,e2] of edges) {
            if(!adj.has(e1)) adj.set(e1, []);
            if(!adj.has(e2)) adj.set(e2, []);
            adj.get(e1).push(e2)
            adj.get(e2).push(e1)
        }

        const visited = new Set();
        const dfs = (cur) => {
            if(visited.has(cur)) return;

            visited.add(cur);
            for(let ng of adj.get(cur) || []) {
                dfs(ng,cur)
            }
        }
        dfs(0)
        return visited.size === n;
    }
}
