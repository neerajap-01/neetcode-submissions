class Solution {
    /**
     * @param {string} S
     * @return {number[]}
     */
    partitionLabels(S) {
        const map = new Map();
        for(let idx = 0; idx < S.length; idx++) {
            map.set(S[idx], idx);
        }
        let start = 0, end = map.get(S[0]), res = [];
        for(let i = 0; i < S.length; i++) {
            end = Math.max(end, map.get(S[i]))
            if(i === end) {
                res.push(end - start + 1);
                start = end + 1;
            }
        }
        return res;
    }
}
