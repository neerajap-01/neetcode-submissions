class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
      const maxCount = (map) => {
        let max = -Infinity;

        Object.values(map).map(val => max = Math.max(max, val));

        return max;
      }

      const map = {};
      let l = 0;
      let r = 0;
      let ans = 0;

      while(r < s.length) {
        map[s[r]] = (map[s[r]] || 0) + 1;

        if((l+r+1) - maxCount(map) <= k) {
          ans = l+r+1
        } else {
          l++
        }

        r++
      }

      return ans;
    }
}
