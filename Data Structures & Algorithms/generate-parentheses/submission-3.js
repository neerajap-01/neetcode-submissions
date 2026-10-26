class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
      const res = [];
      const dfs = (open = 0, close = 0, str = '') => {
        if(str.length === 2 * n) {
          res.push(str);
          return;
        }

        if(open < n) dfs(open + 1, close, str + '(');
        if(close < open) dfs(open, close + 1, str + ')');
      }
      dfs();
      return res;
    }
}
