class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        const ans = new Array(nums.length * 2);
        let n = 0;
        for (let i = 0; i < ans.length; i++) {
            if(n == nums.length) n = 0;
            ans[i] = nums[n];
            n++
        }

        return ans;
    }
}
