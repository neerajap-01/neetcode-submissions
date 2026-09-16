class Solution {
    /**
     * @param {number[][]} edges
     * @return {number[]}
     */
    findRedundantConnection(edges) {
        const par = new Map();
        const rank = new Map();

        for(let i = 1; i <= edges.length; i++) {
            par.set(i, i);
            rank.set(i, 0)
        }

        const find = (node) => {
            if(node !== par.get(node)) {
                par.set(node, find(par.get(node)))
            }
            return par.get(node)
        }

        const union = (n1, n2) => {
            let p1 = find(n1);
            let p2 = find(n2);

            if(p1 === p2) return false;

            if(rank.get(p1) > rank.get(p2)) {
                par.set(p2, p1)
            } else if(rank.get(p2) > rank.get(p1)) {
                par.set(p1, p2)
            } else {
                par.set(p1, p2)
                rank.set(rank.get(p2), rank.get(p2) + 1)
            }

            return true;
        }

        for(let [e1, e2] of edges) {
            if(!union(e1,e2)) return [e1,e2]
        }
    }
}
