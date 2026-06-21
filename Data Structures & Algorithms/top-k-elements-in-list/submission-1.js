class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const hashmap = {};
        const res = [];

        for (let i in nums) {
            hashmap[nums[i]] = (hashmap[nums[i]] || 0) + 1;
        }

        const sortedValues = Object.entries(hashmap).sort(([keyA,valA], [keyB,valB]) => valA - valB);

        while (k != 0) {
            res.push(Number(sortedValues[sortedValues.length - k][0]));
            --k;
        }

        return res;
    }
}
