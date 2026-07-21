class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let max = 0;
        let l = 0;
        const hashMap = {};
        let maxCount = 0;

        for(let r = 0; r < s.length; r++){
            hashMap[s[r]] = (hashMap[s[r]] || 0) + 1;
            maxCount = Math.max(maxCount, hashMap[s[r]])

            let windowSize = r - l + 1
            
            if((windowSize - maxCount) > k){
                hashMap[s[l]] = hashMap[s[l]] - 1
                l++
            }

            max = Math.max(max, r - l + 1)
        }

        return max;
    }
}
