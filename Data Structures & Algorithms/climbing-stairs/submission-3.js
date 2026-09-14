class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        const dp = (num, cache) => {
            if(num <= 1) return 1;
            if(num == 2) return 2;

            if(cache.has(num)) return cache.get(num);

            cache.set(num, dp(num - 1, cache) + dp(num - 2, cache))

            return cache.get(num)
        }

        return dp(n, new Map())
    }
}
