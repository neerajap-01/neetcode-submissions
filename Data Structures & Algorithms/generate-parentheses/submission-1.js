class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const backTracking = (open, close, n, res, stack) => {
            if(open === close && open === n) {
                res.push(stack)
                return
            }

            if(open < n) {
                backTracking(open + 1, close, n, res, stack + "(")
            }

            if(close < open) {
                backTracking(open, close + 1, n, res, stack + ")")
            }
        }

        const res = []
        backTracking(0, 0, n, res, "")
        return res;
    }
}
