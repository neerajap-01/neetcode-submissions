class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
      let ans = [0,0];
      const map = new Map();

      nums.map((num, idx) => map.set(num, idx))

      for(let i = 0; i < nums.length; i++) {
        const index = map.get(target - nums[i])
        if(ans[0] >= i && i != index) {
          ans = [i, index]
        }
      }

      return ans
    }
}
