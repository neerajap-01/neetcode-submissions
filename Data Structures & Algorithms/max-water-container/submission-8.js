class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length-1;
        let maxArea = 0;

        while(l < r) {
            maxArea = Math.max(maxArea, (Math.min(heights[l], heights[r]) * (r-l)));

            if(heights[l] <= heights[r]) {
                l++
            } else {
                r--
            }
        }

        return maxArea;
    }
}
