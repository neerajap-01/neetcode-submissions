class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      const map = new Map();

      for(let i = 0; i < nums.length; i++) {
        const difference = target - nums[i]
        if(map.get(difference)) {
          return [map.get(difference), i]
        } else {
          map.set(difference, i)
        }
      }
    }
}
