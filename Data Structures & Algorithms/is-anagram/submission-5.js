class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
      const map1 = new Map();
      const map2 = new Map();

      for(const char of s) {
        map1.set(char, ((map1.get(char) || 0) + 1));
      }

      for(const char of t) {
        map2.set(char, ((map2.get(char) || 0) + 1));
      }

      for(const char of t) {
        if(!map1.has(char) && map1.get(char) != map2.get(char)) return false
      }

      return true
    }
}
