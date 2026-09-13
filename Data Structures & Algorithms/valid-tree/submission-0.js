class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {boolean}
     */
    validTree(n, edges) {
        const adj = new Map();
        for(let [e1,e2] of edges) {
            if(!adj.has(e1)) adj.set(e1, []);
            if(!adj.has(e2)) adj.set(e2, []);
            adj.get(e1).push(e2)
            adj.get(e2).push(e1)
        }

        const visited = new Set();

        const dfs = (cur,prev) => {
            if(visited.has(cur)) return false;

            visited.add(cur);
            for(let ng of adj.get(cur) || []) {
                if(ng !== prev) {
                    if(!dfs(ng,cur)) return false;
                }
            }
            return true;
        }

        for(let i = 0; i < n; i++) {
            if(visited.size === n) return true
            if(!dfs(i, i - 1)) return false;
        }
        return visited.size === n;
    }
}
