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

        for(let r = 0; r < s.length; r++){
            hashMap[s[r]] = (hashMap[s[r]] || 0) + 1;
            let windowSize = r - l + 1
            let validWindow = windowSize - Math.max(...Object.values(hashMap)) <= k;
            
            if(validWindow) max = Math.max(max,windowSize)
            
            while(!validWindow) {
                hashMap[s[l]] = hashMap[s[l]] - 1;
                l++
                validWindow = (r - l + 1) - Math.max(...Object.values(hashMap)) <= k
            }
        }

        return max;
    }
}
