class Solution {
    /**
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval(tasks, n) {
        const map = new Map();
        for(let task of tasks) {
            map.set(task, (map.get(task) || 0) + 1);
        }

        const maxHeap = new MaxPriorityQueue();
        for(let count of map.values()) {
            maxHeap.enqueue(count)
        }

        const queue = [];
        let time = 0

        while(queue.length || maxHeap.size()) {
            time++;

            if(maxHeap.size()) {
                let count = maxHeap.dequeue();
                count--;

                if(count > 0) {
                    queue.push({ count, untilTime: time + n })
                }
            }

            if(queue.length && queue[0].untilTime === time) {
                let readyTask = queue.shift();
                maxHeap.enqueue(readyTask.count)
            }
        }

        return time;
    }
}
