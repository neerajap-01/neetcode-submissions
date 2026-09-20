class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
        let prevMax = nums[0], prevMin = nums[0], globalMax = nums[0];

        for(let i = 1; i < nums.length; i++) {
            const curMax = prevMax + nums[i];
            const curMin = prevMin + nums[i];

            prevMin = Math.min(curMin, curMax, nums[i]);
            prevMax = Math.max(curMin, curMax, nums[i]);
            globalMax = Math.max(globalMax, prevMax);
        }

        return globalMax;
    }
}
