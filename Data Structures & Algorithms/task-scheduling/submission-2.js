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
        for(let val of map.values()) {
            maxHeap.enqueue(val);
        }

        let queue = [];
        let time = 0;
        
        while(queue.length > 0 || maxHeap.size() > 0) {
            time++;

            if(maxHeap.size()) {
                let count = maxHeap.dequeue();
                count--;

                if(count > 0) {
                    queue.push({ count, untilTime: time + n })
                }
            }

            if(queue.length > 0 && queue[0].untilTime === time) {
                let readyTask = queue.shift();
                maxHeap.enqueue(readyTask.count);
            }
        }

        return time;
    }
}
