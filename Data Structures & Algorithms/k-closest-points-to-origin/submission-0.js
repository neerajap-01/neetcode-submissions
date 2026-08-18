class Solution {
    /**
     * @param {number[][]} points
     * @param {number} k
     * @return {number[][]}
     */
    kClosest(points, k) {
        const maxHeap = new MaxPriorityQueue((point) => point.dist);

        for(let p of points) {
            const dist = p[0]**2 + p[1]**2
            maxHeap.enqueue({ dist, p })
            if(maxHeap.size() > k) {
                maxHeap.dequeue();
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
