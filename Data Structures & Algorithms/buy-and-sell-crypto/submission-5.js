class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let profit = 0;
        let buy = prices[0];

        for(let i = 1; i < prices.length; i++) {
            const cal = prices[i] - buy;
            if(cal > profit) {
                profit = cal
            }

            if(prices[i] < buy) {
                buy = prices[i]
            }
        }

        return profit;
    }
}
