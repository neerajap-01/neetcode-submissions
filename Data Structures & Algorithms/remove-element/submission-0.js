class Solution {
    /**
     * @param {number[]} nums
     * @param {number} val
     * @return {number}
     */
    removeElement(nums, val) {
        let start = 0, end = nums.length - 1;

        while (start <= end) {
            if (nums[end] == val) {
                end--
                continue
            }

            if (nums[start] == val) {
                nums[start] = nums[end]
                end--
            }

            start++
        }
        return start;
    }
}
