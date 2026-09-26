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
        let start = 0, end = 0;
        for(let i = 0; i < S.length; i++) {
            end = Math.max(end, map.get(S[i]));

            if(i === end) {
                res.push(i - start + 1);
                start = i + 1;
            }
        }
        return res;
    }
}
