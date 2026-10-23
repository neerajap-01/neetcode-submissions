class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    permute(nums) {
      const res = [];
      const cur = new Set();
      
      const dfs = () => {
        if(cur.size === nums.length) {
          res.push([...cur]);
          return;
        }

        for(let j = 0; j < nums.length; j++) {
          if(cur.has(nums[j])) continue;

          cur.add(nums[j]);
          dfs();

          cur.delete(nums[j]);
        }
      }
      dfs();
      return res;
    }
}
