class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const set = new Set();
        let count = 0;
        for(let s of s1) {
            set.add(s)
        }

        for(let s of s2) {
            if(set.has(s)){
                count++
            }
        }

        return count == s1.length
    }
}
