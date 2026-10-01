class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const map = new Map();
        const hashMap = new Map();

        nums.map(num => map.set(num, true));
        
        let count = 0;
        let ans = 0;
        for (let i = 0; i < nums.length; i++) {
            let start = nums[i] + 1
            while (map.has(start)) {
                count++
                if(hashMap.has(start)) {
                    ans += count;
                    break;
                }
                start++
            }
            if(count > ans) {
                ans = count;
                hashMap.set(nums[i], ans)
            }
            count = 0;
        }

        return ans+1;
    }
}
