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

        if(this.maxHeap.size() > 0 
        && this.minHeap.size() > 0 
        && this.maxHeap.front() > this.minHeap.front()) {
            const temp = this.maxHeap.dequeue();
            this.minHeap.enqueue(temp);
        }

        if(this.maxHeap.size() > this.minHeap.size() + 1) {
            const temp = this.maxHeap.dequeue();
            this.minHeap.enqueue(temp);
        }

        if(this.minHeap.size() > this.maxHeap.size() + 1) {
            const temp = this.minHeap.dequeue();
            this.maxHeap.enqueue(temp);
        }
    }

    /**
     * @return {number}
     */
    findMedian() {
        if(this.maxHeap.size() > this.minHeap.size()) {
            return this.maxHeap.front();
        }

        if(this.minHeap.size() > this.maxHeap.size()) {
            return this.minHeap.front();
        }

        return ((this.maxHeap.front() + this.minHeap.front()) / 2)
    }
}
