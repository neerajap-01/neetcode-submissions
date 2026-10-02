class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let map1 = new Map();
        for(let char of s) {
            map1.set(char, (map1.get(char) || 0) + 1)
        }
        let map2 = new Map();
        for(let char of t) {
            map2.set(char, (map2.get(char) || 0) + 1)
        }

        for(let [key, val] of map1.entries()) {
            if(!map2.has(key) || map2.get(key) !== val) return false
            map1.delete(key)
            map2.delete(key)
        }
        return map1.size === 0 && map2.size === 0;
    }
}
