class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        if(s1.length > s2.length) return false;

        const s1Map = {};
        const s2Map = {};

        for(let idx in s1) {
            s1Map[s1[idx]] = (s1Map[s1[idx]] || 0) + 1
            s2Map[s2[idx]] = (s2Map[s2[idx]] || 0) + 1
        }

        const isMatch = (s1Map, s2Map) => {
            for(let key in s1Map) {
                if(s1Map[key] != s2Map[key]) return false;
            }

            return true;
        }

        for(let i = 0; i < s2.length - s1.length; i++){
            if(isMatch(s1Map, s2Map)) return true;

            const charIn = s2[i + s1.length];
            const charOut = s2[i]

            s2Map[charIn] = (s2Map[charIn] || 0) + 1

            s2Map[charOut] = s2Map[charOut] - 1;
            if(s2Map[charOut] == 0) delete s2Map[charOut];
        }

        return isMatch(s1Map, s2Map)
    }
}
