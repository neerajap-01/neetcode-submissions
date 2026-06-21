class Solution {
    constructor() {
        this.cache = {};
    }

    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if(this.cache[n]) return this.cache[n]
        if (n < 0) return;
        if (n == 0) return 1;

        const one = this.climbStairs(n - 1);
        const two = this.climbStairs(n - 2);

        this.cache[n] = (one || 0) + (two || 0);

        return this.cache[n];
    }
}
