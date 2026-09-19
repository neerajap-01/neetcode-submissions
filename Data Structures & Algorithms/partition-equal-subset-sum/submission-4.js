class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    canPartition(nums) {
        const total = nums.reduce((sum, cur) => sum + cur, 0);
        if(total % 2 !== 0) return false;

        const target = total / 2;
        let set = new Set([0]);

        for(let i = 0; i < nums.length; i++) {
            const nextSet = new Set();
            for(let val of set) {
                const newSum = nums[i] + val;
                if(newSum === target) return true;
                nextSet.add(newSum);
                nextSet.add(val)
            }
            set = nextSet;
        }
        return false;
    }
}
