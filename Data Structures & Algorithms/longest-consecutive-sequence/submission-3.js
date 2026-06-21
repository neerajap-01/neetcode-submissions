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
        const hashMap = new Map();

        for(let i in nums) {
            map[nums[i]] = true;
        }

        for(let i in nums) {
            let num = nums[i]
            while(map[num+1]) {
                if(hashMap.get(map[num+1])) {
                    count += hashMap.get(map[num+1]);
                    break
                }
                count++;
                num++;
            }
            if(count > ans) {
                ans = count;
                if(!hashMap.get(nums[i])) {
                    hashMap.set(nums[i], ans);
                }
            }
            count = 0;
        }

        return ans+1;
    }
}
