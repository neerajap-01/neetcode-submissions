/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {number}
     */
    minMeetingRooms(intervals) {
        if(intervals.length <= 1) return intervals.length;
        const start = intervals.map(int => int.start).sort((a,b) => a - b);
        const end = intervals.map(int => int.end).sort((a,b) => a - b);

        let res = 0, count = 0, s = 0, e = 0;
        while(s < start.length) {
            if(start[s] < end[e]) {
                s++
                count++
            } else {
                e++
                count--
            }
            res = Math.max(res, count)
        }
        return res;
    }
}
