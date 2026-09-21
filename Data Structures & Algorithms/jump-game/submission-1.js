class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let count = 0;
        for(let i = 0; i < nums.length; i++) {
            if(i === nums.length - 1) break;
            count = Math.max(--count, nums[i]);
            if(count === 0) return false;
        }
        return true;
    }
}
