class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let res = 0
        let buyPrice = prices[0];
        for(let i = 1; i < prices.length; i++) {
            if(prices[i] > buyPrice) {
                res = Math.max(res, prices[i] - buyPrice);
            } else {
                buyPrice = prices[i]
            }
        }

        return res;
    }
}
