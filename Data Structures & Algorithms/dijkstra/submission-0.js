/**
 * const PriorityQueue = require('priority-queue-js');
 */

class Solution {
    /**
     * @param {number} n
     * @param {number[][]} edges
     * @param {number} src
     * @returns {Object}
     */
    shortestPath(n, edges, src) {
        //Adjacency List
        const adj = new Map();
        for(let [s, d, w] of edges) {
            if(!adj.has(s)) {
                adj.set(s, new Set())
            }
            if(!adj.has(d)) {
                adj.set(d, new Set())
            }
            const dsts = adj.get(s);
            dsts.add([d,w]);
            adj.set(s, dsts);
        }

        const minHeap = new MinPriorityQueue(vert => vert[0]);
        minHeap.enqueue([0, src]);
        const visited = {};

        while(!minHeap.isEmpty()) {
            const [w, s] = minHeap.dequeue();

            if(visited.hasOwnProperty(s)) continue;

            visited[s] = w;

            for(let [d,w1] of adj.get(s)) {
                if(visited.hasOwnProperty(d)) continue;

                minHeap.enqueue([w + w1, d])
            }
        }

        for (let i = 0; i < n; i++) {
            if(!visited.hasOwnProperty(i)) {
                visited[i] = -1
            }
        }

        return visited;

    }
}
