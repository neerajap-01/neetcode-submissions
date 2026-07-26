class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {string}
     */
    minWindow(s, t) {
        if(t == "" || t.length > s.length) return "";

        const window = {};
        const hashMap = {};

        for(let c of t) {
            hashMap[c] = (hashMap[c] || 0) + 1;
        }

        let have = 0;
        let need = Object.keys(hashMap).length;
        let l = 0;
        let res = [-1,-1]; // Starting values of left pointer and right pointer
        let resLen = Infinity;

        for(let r = 0; r < s.length; r++) {
            const c = s[r];
            window[c] = (window[c] || 0) + 1;

            if(c in hashMap && window[c] === hashMap[c]) {
                have++
            }

            while (have === need) {
                // Update our res with current valid window
                if((r - l + 1) < resLen) {
                    res = [l,r]
                    resLen = (r - l + 1)
                }

                // Pop values from start to shrink the window
                const leftChar = s[l]
                window[leftChar] = window[leftChar] - 1;
                if(leftChar in hashMap && window[leftChar] < hashMap[leftChar]) {
                    have--
                }
                l++
            }
        }

        return resLen != Infinity ? s.slice(res[0], res[1]+1) : ""
    }
}
