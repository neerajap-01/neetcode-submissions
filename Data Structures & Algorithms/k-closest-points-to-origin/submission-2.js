class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const maxHeap = new MaxPriorityQueue((point) => point.dist);

        for(let p of points) {
            const dist = (p[0] * p[0]) + (p[1] * p[1])

            if(maxHeap.size() < k) {
                maxHeap.enqueue({ dist, p })
            } else if(dist < maxHeap.front().dist) {
                maxHeap.dequeue();
                maxHeap.enqueue({ dist, p })
            }
        }

        const res = [];

        while(maxHeap.size()) {
            const temp = maxHeap.dequeue();
            res.push(temp.p);
        }

        return res;
    }
}
