class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
      let l = 0;
      let r = 0;
      let max = 0;
      const set = new Set();
      while(r < s.length) {
        if(set.has(s[r])) {
          set.delete(s[l++])
        } else {
          set.add(s[r++])
        }
        max = Math.max(max, r - l)
      }
      return max;
    }
}
