class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        const calculateArea = (width,height) => Math.abs(width*height);
        if(heights.length <= 2) return calculateArea(1,Math.min(heights[0],heights[1]))

        let h1 = [-Infinity, 0];
        let h2 = [-Infinity, 0];

        for(let i = 0; i < heights.length; i++) {
            h2 = [...h1];
            if(heights[i] > h1[0]) {
                h1 = [heights[i], i];
            }
        }

        let maxArea = calculateArea(h1[1]-h2[1], Math.min(h1[0],h2[0]))

        let l = 0;
        let r = heights.length-1;

        while(l < r) {
            const area = calculateArea(r-l,Math.min(heights[l],heights[r]));

            if(area > maxArea) {
                maxArea = area;
            } else if(heights[l] > heights[r]) {
                r--
            } else {
                l++
            }
        }

        return maxArea;
    }
}
