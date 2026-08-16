class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findDuplicate(nums) {
        let s = 0;
        let f = 0;

        while(true) {
            s = nums[s];
            f = nums[nums[f]];

            if(s == f) {
                break;
            }
        }

        let s1 = 0;

        while(true) {
            s = nums[s];
            s1 = nums[s1];

            if(s == s1) return s;
        }
    }
}
