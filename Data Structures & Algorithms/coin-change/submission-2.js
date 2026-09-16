class Solution {
    /**
     * @param {number[]} coins
     * @param {number} amount
     * @return {number}
     */
    coinChange(coins, amount) {
        const arr = new Array(amount + 1).fill(Infinity);
        arr[0] = 0

        for(let i = 1; i < arr.length; i++) {
            for(let j = 0; j < coins.length; j++) {
                if(i - coins[j] >= 0) {
                    arr[i] = Math.min(arr[i], 1 + arr[i - coins[j]])
                }
            }
        }
        return arr[arr.length - 1] === Infinity ? -1 : arr[arr.length - 1];
    }
}
