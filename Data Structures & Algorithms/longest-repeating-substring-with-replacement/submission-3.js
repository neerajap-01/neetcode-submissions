class Solution {
    findMajority(hashMap = {}) {
        let maxVal = Math.max(...hashMap.values())

        for(let [key, val] of hashMap) {
            if(val > 0 && maxVal === val) {
                return val
            }
        }

        return 0
    }

    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0;
        let i = 0;
        const hashMap = new Map();

        for(let j = 0; j < s.length; j++) {
            // Char count in current window.
            hashMap.set(s[j], (hashMap.get(s[j]) || 0) + 1)
            const currentMajority = this.findMajority(hashMap)
            let validReplaceWindow = ((j - i + 1) - currentMajority) <= k;

            if(validReplaceWindow) {
                res = Math.max(res, j - i + 1)
            } else {
                //Reduce window till it become valid
                while(!validReplaceWindow) {
                    let val = hashMap.get(s[i]);
                    hashMap.set(s[i], val > 0 ? --val : 0)
                    ++i
                    validReplaceWindow = ((j - i + 1) - this.findMajority(hashMap)) <= k
                }
            }
        }

        return res;
    }
}
