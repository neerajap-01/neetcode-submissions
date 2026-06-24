class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
      const charSet = new Set();
      let l = 0;
      let ans = 0;

      for(let r = 0; r < s.length; r++) {
        while(charSet.has(s[r])) {
          charSet.delete(s[l]);
          l++;
        }

        charSet.add(s[r]);
        ans = Math.max(ans, charSet.size);
      }

      return ans;
    }
}
