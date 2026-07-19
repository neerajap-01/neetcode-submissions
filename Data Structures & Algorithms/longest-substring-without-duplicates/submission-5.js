class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        const set = new Set();
        let i = 0;
        let maxSize = 0;

        for(let char of s) {
            while(set.has(char)){
                set.delete(s[i]);
                i++
            }

            set.add(char);
            maxSize = Math.max(maxSize, set.size)
        }

        return maxSize
    }
}
