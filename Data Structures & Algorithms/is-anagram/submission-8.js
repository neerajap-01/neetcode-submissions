class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      if(s.length !== t.length) return false

      const map1 = new Map();
      const map2 = new Map();

      for(const char of s) {
        map1.set(char, ((map1.get(char) || 0) + 1));
      }

      for(const char of t) {
        map2.set(char, ((map2.get(char) || 0) + 1));
      }

      for(const [key, val] of map2) {
        if(!map1.has(key) || val !== map1.get(key)) return false
      }

      return true
    }
}
