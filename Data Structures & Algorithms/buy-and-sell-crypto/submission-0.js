class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let buyVal = [Infinity, -1];
        let maxProfit = 0;

        for(let i = 0; i < prices.length; i++) {
            if(prices[i] < buyVal[0]) {
                buyVal = [prices[i], i]
            }
        }

        for(let j = buyVal[1]+1; j < prices.length; j++) {
            if((prices[j] - buyVal[0]) > maxProfit) {
                maxProfit = prices[j] - buyVal[0]
            }
        }

        return maxProfit;
    }
}
