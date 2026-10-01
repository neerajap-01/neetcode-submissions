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
                maxArea = Math.max(maxArea, heights[r]**2)

                while(heights[l] >= heights[r] && l < r) {
                    r--
                }
            } else {
                maxArea = Math.max(maxArea, heights[l]**2)

                while(heights[l] <= heights[r] && l < r) {
                    l++
                }
            }
        }

        return maxArea;
    }
}
