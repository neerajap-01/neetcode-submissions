class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const s1Map = new Map();
        const s2Map = new Map();

        for(let idx in s1){
            s1Map.set(s1[idx], (s1Map.get(s1[idx]) || 0) + 1)
            s2Map.set(s2[idx], (s2Map.get(s2[idx]) || 0) + 1)
        }

        const isMatched = (map1, map2) => {
            for(let [key, val] of map1) {
                if(map2.get(key) != val) return false
            }

            return true
        }

        for(let i = 0; i < s2.length - s1.length; i++){
            if(isMatched(s1Map, s2Map)) return true;

            const charIn = s2[i + s1.length]
            const charOut = s2[i]

            s2Map.set(charIn, (s2Map.get(charIn) || 0) + 1)

            s2Map.set(charOut, s2Map.get(charOut) - 1)
            if(s2Map.get(charOut) == 0) s2Map.delete(charOut)
        }

        return isMatched(s1Map, s2Map)
    }
}
