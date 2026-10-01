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
            if(heights[l] > heights[r]) {
                maxArea = Math.max(maxArea, (heights[r]*(r-l)))

                while(heights[l] > heights[r] && l < r) {
                    r--
                }
            } else if(heights[l] < heights[r]) {
                maxArea = Math.max(maxArea, (heights[l]*(r-l)))

                while(heights[l] < heights[r] && l < r) {
                    l++
                }
            } else {
                maxArea = Math.max(maxArea, (heights[l]*(r-l)))
                l++
            }
        }

        return maxArea;
    }
}
