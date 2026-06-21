class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(nums.length == 0) return 0;
        const map = new Map();

        nums.map(num => map.set(num, true));
        
        let count = 0;
        let ans = 0;
        for (let i = 0; i < nums.length; i++) {
            let start = nums[i] + 1
            while (map.has(start)) {
                count++
                start++
            }
            ans = Math.max(ans,count)
            count = 0;
        }

        return ans+1;
    }
}
