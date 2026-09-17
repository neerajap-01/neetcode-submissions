class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const dp = new Array(nums.length).fill(0);
        dp[dp.length - 1] = 1;

        for(let i = nums.length - 1; i >= 0; i--) {
            for(let j = i + 1; j < nums.length; j++) {
                let ans = 0;
                if(nums[i] < nums[j]) {
                    ans = 1 + dp[j]
                } else if(nums[i] > nums[j]) {
                    ans = 1;
                } else {
                    ans = dp[j]
                }
                dp[i] = Math.max(dp[i], ans)
            }
        }

        return Math.max(...dp)
    }
}
