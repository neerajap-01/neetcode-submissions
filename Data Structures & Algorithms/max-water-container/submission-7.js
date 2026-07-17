class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let l = 0;
        let r = heights.length-1;

        while(l < r) {
            let minVal = Math.min(heights[l],heights[r]);
            maxArea = Math.max(maxArea, minVal * (r-l));

            if(heights[l] <= heights[r]) {
                l++
            } else {
                r--
            }
        }

        return maxArea;
    }
}
