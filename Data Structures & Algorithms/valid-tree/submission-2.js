class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        if(n - 1 !== edges.length) return false;

        const adj = new Map();
        for(let [e1,e2] of edges) {
            if(!adj.has(e1)) adj.set(e1, []);
            if(!adj.has(e2)) adj.set(e2, []);
            adj.get(e1).push(e2);
            adj.get(e2).push(e1);
        }

        const visited = new Set();
        const cycle = new Set();
        
        const dfs = (cur, prev) => {
            if(visited.has(cur)) return true;

            if(cycle.has(cur)) return false;

            cycle.add(cur);
            for(let ng of adj.get(cur) || []) {
                if(prev !== ng) {
                    if(!dfs(ng, cur)) return false;
                }
            }
            cycle.delete(cur);
            visited.add(cur);
            return true;
        }

        for(let i = 0; i < n; i++) {
            if(!dfs(i, i - 1)) return false
        }

        return visited.size === n;
    }
}
