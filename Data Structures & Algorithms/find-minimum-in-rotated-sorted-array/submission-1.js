class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let res = nums[0];

        let l = 0;
        let r = nums.length - 1;

        while(l < r) {
            if(nums[l] < nums[r]) {
                res = Math.min(nums[l], res);
                break;
            }
            const mid = Math.floor((l + r) / 2);
            res = Math.min(res, nums[mid])

            if(nums[mid] > nums[r]) {
                l = mid + 1
            } else {
                r = mid
            }
        }

        return res;
    }
}
