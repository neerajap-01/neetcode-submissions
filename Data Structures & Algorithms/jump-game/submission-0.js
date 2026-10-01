class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canJump(nums) {
        let count = nums[0];
        for(let i = 1; i < nums.length; i++) {
            if(i === nums.length - 1) return true;
            count--;
            count = Math.max(count, nums[i]);
            if(count === 0) return false;
        }
        return true;
    }
}
