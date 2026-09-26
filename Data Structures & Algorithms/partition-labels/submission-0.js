class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const map = new Map();
        for(let i = 0; i < S.length; i++) {
            map.set(S[i], i);
        }
        const res = [];
        let s = 0, e = map.get(S[0]);
        while(s < S.length) {
            for(let i = s; i <= e; i++) {
                e = Math.max(e, map.get(S[i]))
            }
            res.push(e - s + 1);
            s = e+1
            e = map.get(S[e+1])
        }
        return res;
    }
}
