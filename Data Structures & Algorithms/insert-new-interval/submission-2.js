class Solution {
    /**
     * @param {number[][]} intervals
     * @param {number[]} newInterval
     * @return {number[][]}
     */
    insert(intervals, newInterval) {
        const res = [];
        let i = 0;

        while(i < intervals.length && newInterval[0] > intervals[i][1]) {
            res.push(intervals[i])
            i++
        }

        while(i < intervals.length && newInterval[1] >= intervals[i][0]) {
            newInterval = [Math.min(intervals[i][0], newInterval[0]), Math.max(intervals[i][1],newInterval[1])]
            i++
        }
        res.push(newInterval)

        while(i < intervals.length) {
            res.push(intervals[i])
            i++
        }

        return res;
    }
}
