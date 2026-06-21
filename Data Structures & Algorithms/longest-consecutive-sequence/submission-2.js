class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length) return 0;

        let ans = 0;
        let count = 0;
        const map = {};

        for(let i in nums) {
            map[nums[i]] = true;
        }

        for(let i in nums) {
            let num = nums[i]
            while(map[num+1]) {
                count++;
                num++;
            }
            ans = Math.max(ans,count);
            count = 0;
        }

        return ans+1;
    }
}
