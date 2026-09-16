class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @returns {number}
     */
    countComponents(n, edges) {
        const adj = new Map();
        for(let [e1,e2] of edges) {
            if(!adj.has(e1)) adj.set(e1, []);
            if(!adj.has(e2)) adj.set(e2, []);
            adj.get(e1).push(e2);
            adj.get(e2).push(e1);
        }

        const visited = new Set();

        const dfs = (cur) => {
            if(visited.has(cur)) return false;

            visited.add(cur)
            for(let ng of adj.get(cur) || []) {
                dfs(ng);
            }
            return true;
        }
        let count = 0;
        for(let i = 0; i < n; i++) {
            if(!dfs(i)) continue;
            count++
        }
        return count
    }
}
