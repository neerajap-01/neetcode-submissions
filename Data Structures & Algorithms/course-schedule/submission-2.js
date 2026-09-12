class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = new Map();
        for(let i = 0; i < numCourses; i++) {
            adj.set(i, [])
        }
        for(let [c,p] of prerequisites) {
            adj.get(c).push(p)
        }

        const visited = new Set();
        const dfs = (crs) => {
            if(visited.has(crs)) return false;
            if(adj.get(crs).length === 0) return true;

            visited.add(crs);
            for(let pre of adj.get(crs)) {
                if(!dfs(pre)) return false
            }
            visited.delete(crs);
            adj.set(crs, []);

            return true
        }

        for(let k = 0; k < numCourses; k++) {
            if(!dfs(k)) return false
        }
        return true;
    }
}
