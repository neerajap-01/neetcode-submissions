class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const freq = new Map();
        for(let task of tasks) {
            freq.set(task, (freq.get(task) || 0) + 1)
        }

        const maxHeap = new MaxPriorityQueue();
        for(let count of freq.values()){
            maxHeap.enqueue(count)
        }


        const queue = [];
        let time = 0;

        while(maxHeap.size() > 0 || queue.length > 0) {
            time++

            if(maxHeap.size() > 0) {
                let count = maxHeap.dequeue();
                count--;

                if(count > 0) {
                    queue.push({ count,  unlockTime: time + n })
                }
            }

            if(queue.length > 0 && queue[0].unlockTime == time) {
                maxHeap.enqueue(queue.shift().count)
            }
        }

        return time;
    }
}
