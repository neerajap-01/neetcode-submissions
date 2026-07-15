class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
      const cacheMap = new Map();
      const hashMap = new Map();
      let max = 0;

      for(let j = 0; j < nums.length; j++) {
        hashMap.set(nums[j], true)
      } 

      for(let i = 0; i < nums.length; i++) {
        let count = 1;
        let num = nums[i]+1
        while(hashMap.has(num)) {
            if(cacheMap.has(num)) {
                count += cacheMap.get(num)
                break;
            } else {
                count++;
                num++
            } 
        }

        cacheMap.set(nums[i], count)
        max = Math.max(max, count)
      } 

      return max;
    }
}
