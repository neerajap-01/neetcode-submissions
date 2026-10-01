class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let step = nums[0];
        let res = 1;
        for(let i = 1; i < nums.length; i++) {
            if(i === nums.length - 1) break;
            step--;
            if(nums[i] > step) {
                step = nums[i]
                res++
            }
        }
        return res;
    }
}
