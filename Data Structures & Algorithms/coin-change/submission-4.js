class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const dp = new Array(amount + 1).fill(Infinity);
        dp[0] = 0;

        for(let i = 1; i < dp.length; i++) {
            for(let j = 0; j < coins.length; j++) {
                if((i - coins[j]) >= 0) {
                    dp[i] = Math.min(dp[i], 1 + dp[i - coins[j]])
                }
            }
        }

        return dp[dp.length - 1] === Infinity ? -1 : dp[dp.length - 1]
    }
}
