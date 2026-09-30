class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    jump(nums) {
        let count = 0, start = 0, end = 0;
        while (end < nums.length - 1) {
                let farthest = 0;
                for(let i = start; i <= end; i++) {
                    farthest = Math.max(farthest, i + nums[i])
                }
                start = end + 1;
                end = farthest
                count++
        }
        return count;
    }
}
