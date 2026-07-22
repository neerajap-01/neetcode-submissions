class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const backTrack = (open, close, n, res, stack) => {
            if(open === close && open === n && close === n) {
                res.push(stack)
                return;
            }

            if(open < n) {
                backTrack(open + 1, close, n, res, stack + "(")
            }

            if(close < open) {
                backTrack(open, close + 1, n, res, stack + ")")
            }
        }

        const res = [];
        backTrack(0, 0, n, res, "")
        return res;
    }
}
