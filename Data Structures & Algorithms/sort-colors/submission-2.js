class Solution {
    /**
     * @param {number[]} nums
     * @return {void} Do not return anything, modify nums in-place instead.
     */
    sortColors(nums) {
        const bucket = [0,0,0];

        for (let i = 0; i < nums.length; i++) {
            bucket[nums[i]] += 1;
        }

        let j = 0;
        for (let i = 0; i < nums.length; i++) {
            if(bucket[j]) {
                nums[i] = j;
                bucket[j]--;
            }
            if(!bucket[j]) j++
        }

        return nums;
    }
}
