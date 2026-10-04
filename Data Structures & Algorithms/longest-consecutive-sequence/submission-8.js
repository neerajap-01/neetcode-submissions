class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let max = 0;

        for(let i = 0; i < nums.length; i++) {
            if(!set.has(nums[i] - 1)) {
                let count = 1;
                let cur = nums[i]
                while(set.has(cur + 1)) {
                    count++
                    cur++
                }
                max = Math.max(max, count);
            }
        }

        return max;
    }
}
