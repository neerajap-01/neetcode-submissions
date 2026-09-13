class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adj = new Map();
        for(let i = 0; i < numCourses; i++) {
            adj.set(i, [])
        }
        for(let [c,p] of prerequisites) {
            adj.get(c).push(p);
        }

        const visited = new Set();
        const cycle = new Set();
        const res = []

        const dfs = (crs) => {
            if(visited.has(crs)) return true;
            if(cycle.has(crs)) return false;

            cycle.add(crs)
            for(let ng of adj.get(crs)) {
                if(!dfs(ng)) return false;
            }
            res.push(crs);
            visited.add(crs);
            cycle.delete(crs);
            return true;
        }

        for(let i = 0; i < numCourses; i++) {
            if(!dfs(i)) return [];
        }
        return res;
    }
}
