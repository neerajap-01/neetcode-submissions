class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const map1 = {}
        const map2 = {}

        for(let idx in s1) {
            map1[s1[idx]] = (map1[s1[idx]] || 0) + 1;
            map2[s2[idx]] = (map2[s2[idx]] || 0) + 1;
        }

        const isMatched = (map1, map2) => {
            for(let key in map1) {
                if(!(key in map2) || map1[key] !== map2[key]) return false
            }

            return true;
        }

        for(let i = 0; i < s2.length; i++){
            if(isMatched(map1,map2)) return true;

            const charIn = s2[i+s1.length];
            const charOut = s2[i];

            map2[charIn] = (map2[charIn] || 0) + 1;

            map2[charOut] = map2[charOut] - 1;
            if(map2[charOut] == 0) delete map2[charOut]
        }

        return isMatched(map1,map2)
    }
}
