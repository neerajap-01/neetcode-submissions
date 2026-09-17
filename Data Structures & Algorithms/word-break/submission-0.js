class Solution {
    /**
     * @param {string} s
     * @param {string[]} wordDict
     * @return {boolean}
     */
    wordBreak(s, wordDict) {
        const dp = new Array(s.length).fill(false);
        dp[s.length] = true;

        for(let i = s.length - 1; i >= 0; i--){
            for(let word of wordDict) {
                if((i + word.length) <= s.length && s.slice(i, word.length + i) == word) {
                    dp[i] = dp[i + word.length];
                }
                if(dp[i]) break
            }
        }

        return dp[0]
    }
}
