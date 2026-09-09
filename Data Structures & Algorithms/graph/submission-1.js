class Graph {
    constructor() {
        this.graph = new Map();
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {void}
     */
    addEdge(src, dst) {
        if(!this.graph.has(src)) {
            this.graph.set(src, new Set([dst]));
        }
        if(!this.graph.has(dst)) {
            this.graph.set(dst, new Set());
        }
        const dsts = this.graph.get(src)
        dsts.add(dst);
        this.graph.set(src, dsts);
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    removeEdge(src, dst) {
        if(!this.graph.has(src) || !this.graph.has(dst) || !this.graph.get(src).has(dst)) return false;
        this.graph.get(src).delete(dst)
        return true;
    }

    /**
     * @param {number} src
     * @param {number} dst
     * @return {boolean}
     */
    hasPath(src, dst) {
        if(!this.graph.has(src) || !this.graph.has(dst)) return false;
        
        const visited = new Set();
        const dfs = (cur) => {
            if(cur === dst) return true;

            visited.add(cur)
            for(let next of this.graph.get(cur) || []) {
                if(!visited.has(next)) {
                    if(dfs(next)) return true;
                }
            }
            return false;
        }
        
        return dfs(src);
    }
}
