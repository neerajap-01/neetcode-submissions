class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxProduct(nums) {
        let prevMin = nums[0], prevMax = nums[0], globalMax = nums[0];

        for(let i = 1; i < nums.length; i++) {
            const curMin = nums[i] * prevMin;
            const curMax = nums[i] * prevMax;

            prevMin = Math.min(curMin, curMax, nums[i]);
            prevMax = Math.max(curMin, curMax, nums[i]);
            globalMax = Math.max(prevMax, globalMax)
        }

        return globalMax;
    }
}
