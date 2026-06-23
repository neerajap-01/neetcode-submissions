class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let maxProfit = 0;
      let l = 0;
      let r = 1;

      while(r < prices.length) {
        if(prices[r] - prices[l] > maxProfit) {
          maxProfit = prices[r] - prices[l]
        }

        if(prices[l] > prices[r]) {
          l = r
        }

        r++
      }

      return maxProfit;
    }
}
