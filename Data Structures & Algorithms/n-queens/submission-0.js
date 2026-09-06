class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const cols = new Set();
        const posDiags = new Set(); // (r + c) to get constant result
        const negDiags = new Set(); // (r - c) to get constant result
        let res = [];
        const board = Array.from({ length: n }, () => Array(n).fill('.'))

        const backtracking = (r) => {
            if(r === n) {
                res.push(board.map((row) => row.join('')));
                return;
            }

            for(let c = 0; c < n; c++) {
                if(cols.has(c) || posDiags.has(r + c) || negDiags.has(r - c)) {
                    continue;
                }

                cols.add(c);
                posDiags.add(r + c);
                negDiags.add(r - c);
                board[r][c] = 'Q'

                backtracking(r + 1);

                cols.delete(c);
                posDiags.delete(r + c);
                negDiags.delete(r - c);
                board[r][c] = '.' 
            }           
        }

        backtracking(0)
        return res;
    }
}
