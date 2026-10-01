class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n < 0) return;
        if (n == 0) return 1;

        const one = this.climbStairs(n - 1);
        const two = this.climbStairs(n - 2);

        return (one || 0) + (two || 0);
    }
}
