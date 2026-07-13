class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
      const map = new Map();
      const bucket = new Array(nums.length);
      const ans = [];

      for(let i = 0; i < nums.length; i++) {
        map.set(nums[i], ((map.get(nums[i]) || 0) + 1))
      }

      for(let [num, freq] of map) {
        if(bucket[freq]) {
            bucket[freq].push(num)
        } else {
            bucket[freq] = [num]
        }
      }

      for(let i = bucket.length-1; i >= 0; i--) {
        if(bucket[i] && ans.length < k) {
           while(bucket[i].length > 0 && ans.length < k) {
                ans.push(bucket[i].pop())
           }
        }
      }

      return ans;
    }
}
