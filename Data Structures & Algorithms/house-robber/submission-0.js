class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        nums.push(0);
        for(let i = nums.length - 3; i >= 0; i--) {
            nums[i] += nums[i + 2]
        }

        return Math.max(nums[0],nums[1])
    }
}
