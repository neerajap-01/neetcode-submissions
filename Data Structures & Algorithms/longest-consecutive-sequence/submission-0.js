class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if(!nums.length) return 0;

        let count = 0;
        const map = {};
        let smallestNumber = Infinity;

        for(let i in nums) {
            smallestNumber = Math.min(nums[i], smallestNumber);
            map[nums[i]] = true;
        }

        while(true) {
            if(!map[smallestNumber+1]) return count+1;
            count++
            smallestNumber++
        }
    }
}
