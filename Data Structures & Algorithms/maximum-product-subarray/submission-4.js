class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let prevMax = nums[0], prevMin = nums[0], globalMax = nums[0];

        for(let i = 1; i < nums.length; i++) {
            const curMax = nums[i] * prevMax;
            const curMin = nums[i] * prevMin;

            prevMax = Math.max(curMax, curMin, nums[i]);
            prevMin = Math.min(curMin, curMax, nums[i]);
            globalMax = Math.max(globalMax, prevMax); 
        }

        return globalMax;
    }
}
