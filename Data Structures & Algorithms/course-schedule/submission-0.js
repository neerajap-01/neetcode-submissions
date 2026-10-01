class Solution {
    /**
     * @param {number} numCourses
     * @param {number[][]} prerequisites
     * @return {boolean}
     */
    canFinish(numCourses, prerequisites) {
        const adj = new Map();

        for(let [c1, c2] of prerequisites) {
            if(adj.has(c1) || adj.has(c2) || adj.get(c1)?.has(c2) || adj.get(c2)?.has(c1)) return false;

            if(!adj.has(c1)) {
                adj.set(c1, new Set())
            } else if(!adj.has(c2)) {
                adj.set(c2, new Set());
            }
            adj.get(c1).add(c2);
        }

        return true;
    }
}
