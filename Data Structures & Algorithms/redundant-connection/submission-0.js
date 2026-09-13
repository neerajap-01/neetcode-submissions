class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const par = new Array(edges.length + 1).fill(0).map((_, i) => i); // [0,1,2,3,4]
        const rank = new Array(edges.length + 1).fill(1) // [1,1,1,1,1]

        const find = (n) => {
            if(n !== par[n]) {
                par[n] = find(par[n])
            }
            return par[n]
        }

        const union = (n1, n2) => {
            let p1 = find(n1), p2 = find(n2);

            if(p1 === p2) return false;

            if(rank[p1] > rank[p2]) {
                par[p2] = p1;
                rank[p1] += 1;
            } else {
                par[p1] = p2;
                rank[p2] += 1;
            }

            return true;
        }

        for(let [e1,e2] of edges) {
            if(!union(e1,e2)) {
                return [e1,e2]
            }
        }
    }
}
