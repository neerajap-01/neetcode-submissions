class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    maxSlidingWindow(nums, k) {
        const res = []

        for(let i = 0; i <= nums.length - k; i++) {
            const window = []
            for(let j = i; j < i+k; j++) {
                window.push(nums[j])
            }

            res.push(Math.max(...window))
        }

        return res;
    }
}
