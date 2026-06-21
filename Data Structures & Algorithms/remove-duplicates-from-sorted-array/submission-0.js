class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    removeDuplicates(nums) {
        let l = 1, r = 1;

        while (r < nums.length) {
            if (nums[r] == nums[r-1]) {
                r++
            } else {
                nums[l] = nums[r];
                r++;
                l++;
            }
        }

        return l;
    }
}
