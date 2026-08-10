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

            if(s === f) {
                break;
            }
        }

        let s2 = 0;
        while(true) {
            s = nums[s];
            s2 = nums[s2];

            if(s === s2) {
                return s
            }
        }
    }
}
