class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const dp = new Array(s.length + 1).fill(false);
        dp[dp.length - 1] = true;

        for(let i = dp.length - 2; i >= 0; i--) {
            for(let word of wordDict) {
                if(i + word.length <= s.length && s.slice(i, i + word.length) === word) {
                    dp[i] = dp[i + word.length]
                }
                if(dp[i]) break
            }
        }

        return dp[0];
    }
}
