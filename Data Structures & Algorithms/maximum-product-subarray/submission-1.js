class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let previousMin = nums[0], previousMax = nums[0], globalMax = nums[0];

        for(let i = 1; i < nums.length; i++) {
            const temp = (nums[i] * 1) + 0;
            const currentMin = (nums[i] * previousMin) + 0;
            const currentMax = (nums[i] * previousMax) + 0;
            previousMax = Math.max(temp, currentMin, currentMax)
            previousMin = Math.min(temp, currentMin, currentMax)
            globalMax = Math.max(globalMax, previousMax)
        }

        return globalMax;
    }
}
