class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let res = 0;
        let l = 0;
        for(let c of s) {
            while(set.has(c)) {
                set.delete(s[l]);
                l++
            }
            set.add(c);
            res = Math.max(res, set.size)
        }
        return res;
    }
}
