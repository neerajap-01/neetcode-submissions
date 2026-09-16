class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    lengthOfLIS(nums) {
        const list = new Array(nums.length).fill(1);

        for(let i = nums.length - 1; i >= 0; i--) {
            for(let j = i + 1; j < nums.length; j++) {
                if(nums[i] < nums[j]) {
                    list[i] = Math.max(list[i], 1 + list[j])
                }
            }
        }

        return Math.max(...list)
    }
}
