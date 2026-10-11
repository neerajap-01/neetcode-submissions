class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        const map = new Map();
        let maxFreq = 0, l = 0, res = 0;
        for(let r = 0;r < s.length; r++) {
            map.set(s[r], (map.get(s[r]) || 0) + 1);
            maxFreq = Math.max(maxFreq, map.get(s[r]));

            const windowSize = (r - l) + 1;
            if((windowSize - maxFreq) > k) {
                map.set(s[l], map.get(s[l]) - 1);
                l++
            }

            res =  Math.max(res, (r - l) + 1)
        }
        return res;
    }
}
