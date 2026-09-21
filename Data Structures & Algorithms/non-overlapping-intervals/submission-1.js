class Solution {
    /**
     * @param {number[][]} intervals
     * @return {number}
     */
    eraseOverlapIntervals(intervals) {
        intervals.sort((a,b) => a[0] - b[0]);
        let count = 0;
        let prevEnd = intervals[0][1];
        for(let i = 1; i < intervals.length; i++) {
            if(intervals[i][0] >= prevEnd) {
                prevEnd = intervals[i][1];
            } else {
                count++
                prevEnd = Math.min(prevEnd, intervals[i][1])
            }
        }
        return count;
    }
}
