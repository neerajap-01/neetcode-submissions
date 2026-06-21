class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        const res = [];

        for (let i = 0; i < nums.length; i++) {
            map.set(nums[i], i);
        }

        for (let j = 0; j < nums.length; j++) {
            const result = target - nums[j];
            const findRes = map.get(result)
            if(findRes && j != findRes) {
                res.push([j,findRes])
            }
        }

        return res[0];
    }
}
