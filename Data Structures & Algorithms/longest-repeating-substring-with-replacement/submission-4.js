class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let l = 0;
        const hashMap = new Map();
        let maxCount = 0;

        for(let r = 0; r < s.length; r++) {
            // Char count in current window.
            hashMap.set(s[r], (hashMap.get(s[r]) || 0) + 1)
            maxCount = Math.max(maxCount, hashMap.get(s[r]));

            let windowSize = r - l + 1;

            if((windowSize - maxCount) > k) {
                hashMap.set(s[l], hashMap.get(s[l]) - 1)
                l++
            }

            res = Math.max(res, r - l + 1)
        }

        return res;
    }
}
