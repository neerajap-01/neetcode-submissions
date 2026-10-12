class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMin(nums) {
        let min = nums[0];
        let l = 0, r = nums.length - 1;

        while(l <= r) {
            if(nums[l] < nums[r]) {
                min = Math.min(min, nums[l]);
                break;
            }
            const mid = Math.floor((l + r)/2);
            min = Math.min(min, nums[mid]);

            if(nums[mid] > nums[r]) l = mid + 1;
            else r = mid - 1;
        }
        return min;
    }
}
