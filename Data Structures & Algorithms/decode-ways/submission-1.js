class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    numDecodings(s) {
        const dp = new Map();

        const dfs = (i) => {
            if(dp.has(i)) return dp.get(i);

            if(i === s.length) return 1;
            if(s[i] === '0') return 0;

            let res = dfs(i + 1); //Single digit;
            if((i + 1 < s.length) && (s[i] === '1' || (s[i] === '2' && s[i + 1] < '7'))) {
                res += dfs(i + 2) //Double Digits
            }
            dp.set(i, res);
            return res;
        }

        return dfs(0);
    }
}
