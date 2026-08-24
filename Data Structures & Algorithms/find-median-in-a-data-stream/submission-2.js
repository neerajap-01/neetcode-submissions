class MedianFinder {
    constructor() {
        this.maxHeap = new MaxPriorityQueue();
        this.minHeap = new MinPriorityQueue();
    }

    /**
     *
     * @param {number} num
     * @return {void}
     */
    addNum(num) {
        this.maxHeap.enqueue(num);

        this.maxHeap.enqueue(num);

        if(this.minHeap.size() && this.maxHeap.size() && this.maxHeap.front() > this.minHeap.front()) {
            this.minHeap.enqueue(this.maxHeap.dequeue())
        }
        if(this.minHeap.size() && this.maxHeap.size() && this.minHeap.front() < this.maxHeap.front()) {
            this.maxHeap.enqueue(this.minHeap.dequeue())
        }

        if(this.maxHeap.size() > this.minHeap.size() + 1) {
            this.minHeap.enqueue(this.maxHeap.dequeue())
        }
        if(this.minHeap.size() > this.maxHeap.size() + 1) {
            this.maxHeap.enqueue(this.minHeap.dequeue())
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.front()
        }

        if(this.minHeap.size() > this.maxHeap.size()) {
            return this.minHeap.front()
        }

        return ((this.maxHeap.front() + this.minHeap.front()) / 2)
    }
}
