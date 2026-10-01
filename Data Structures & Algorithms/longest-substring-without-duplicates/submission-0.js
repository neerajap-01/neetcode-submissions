class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {
        let set = new Set();
        let maxSize = 0;

        for(let char of s) {
            if(set.has(char)) {
                if(set.size > maxSize) {
                    maxSize = set.size;
                }
                set = new Set(char)
            } else {
                set.add(char)
            }
        }

        return maxSize;
    }
}
