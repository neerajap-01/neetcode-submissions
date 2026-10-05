class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let res = 0;
        let l = 0;
        for(let r = 0; r < s.length; r++) {
            if(!set.has(s[r])) set.add(s[r]);
            else {
                while(set.has(s[r])) {
                    set.delete(s[l]);
                    l++
                }
                set.add(s[r]);
            }
            res = Math.max(res, set.size)
        }
        return res;
    }
}
