class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {number[]}
     */
    findOrder(numCourses, prerequisites) {
        const adj = new Map();

        for(let c = 0; c < numCourses; c++) {
            adj.set(c, [])
        }

        for(let [crs, pre] of prerequisites) {
            adj.get(crs).push(pre)
        }

        const visited = new Set();
        const cycle = new Set();
        const res = [];
        const dfs = (crs) => {
            if(cycle.has(crs)) return false;
            if(visited.has(crs)) return true;

            cycle.add(crs)
            for(let pre of adj.get(crs)) {
                if(!dfs(pre)) return false
            }
            cycle.delete(crs);
            visited.add(crs);
            res.push(crs)
            return true;
        }

        for(let c = 0; c < numCourses; c++) {
            if(!dfs(c)) return []
        }
        return res;
    }
}
