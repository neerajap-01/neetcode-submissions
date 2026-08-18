class Solution {
    /**
     * @param {number[]} stones
     * @return {number}
     */
    lastStoneWeight(stones) {
        const maxHeap = new MaxPriorityQueue();

        for(let i = 0; i < stones.length; i++) {
            maxHeap.enqueue(stones[i]);
        }

        while(maxHeap.size() > 1) {
            const x = maxHeap.dequeue();
            const y = maxHeap.dequeue();

            if(x < y) {
                maxHeap.enqueue(y - x)
            } else {
                maxHeap.enqueue(x - y)
            }
        }

        return maxHeap.size() > 0 ? maxHeap.dequeue() : 0
    }
}
