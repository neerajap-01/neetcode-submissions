class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map = new Map();
        for(let i = 0; i < nums.length; i++) {
            map.set(nums[i], i);
        }

        for(let j = 0; j < nums.length; j++) {
            const findIdx = map.get(target - nums[j]);
            if(findIdx && j !== findIdx) return [j, findIdx]
        }
    }
}
