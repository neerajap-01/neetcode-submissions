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

        Object.entries(hashmap).map(([key, val], _) => {
            if (val >= k) res.push(Number(key))
        })

        return res;
    }
}
