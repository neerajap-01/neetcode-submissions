class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adj = new Map();
        for(let [e1,e2] of edges) {
            if(!adj.has(e1)) {
                adj.set(e1, [])
            }
            adj.get(e1).push(e2)
        }

        const visited = new Set();
        const dfs = (j) => {
            if(visited.has(j)) return 0;
            visited.add(j);
            for(let ng of adj.get(j) || []) {
                dfs(ng)
            }
            return 1;
        }
        let res = 0
        for(let i = 0; i < n; i++) {
            res += dfs(i)
        }
        return res;
    }
}
