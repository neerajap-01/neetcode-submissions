class KthLargest {
    /**
     * @param {number} k
     * @param {number[]} nums
     */
    constructor(k, nums) {
        this.k = k;
        this.minHeap = new MinPriorityQueue();

        for(let i = 0; i < nums.length; i++) {
            this.minHeap.enqueue(nums[i])
        };

        while(this.minHeap.size() > this.k) {
            this.minHeap.dequeue()
        }
    }

    /**
     * @param {number} val
     * @return {number}
     */
    add(val) {
        if(this.minHeap.size() < this.k) {
            this.minHeap.enqueue(val)
        } else if(val > this.minHeap.front()) {
            this.minHeap.dequeue();
            this.minHeap.enqueue(val)
        }

        return this.minHeap.front();
    }
}
