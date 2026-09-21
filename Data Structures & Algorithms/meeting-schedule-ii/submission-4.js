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
        const start = intervals.map(time => time.start).sort((a,b) => a - b);
        const end = intervals.map(time => time.end).sort((a,b) => a - b);
        let count = 0, res = 0, s = 0, e = 0;
        while(s < start.length) {
            if(start[s] < end[e]) {
                count++
                s++
            } else {
                count--
                e++
            }
            res = Math.max(res, count)
        }
        return res;
    }
}
