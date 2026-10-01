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
        intervals.sort((a,b) => a.start - b.start);
        const rooms = [[intervals[0]]]

        for(let i = 1; i < intervals.length; i++) {
            let foundSpot = false;
            for(let j = 0; j < rooms.length; j++) {
                if(intervals[i].start >= rooms[j][rooms[j].length - 1].end) {
                    rooms[j].push(intervals[i])
                    foundSpot = true
                } 
            }
            if(!foundSpot) rooms.push([intervals[i]])
        }

        return rooms.length
    }
}
