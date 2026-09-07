class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const cols = new Set();
        const posDiag = new Set(); // (r + c);
        const negDiag = new Set(); // (r - c);
        const board = Array.from({ length: n }, () => Array(n).fill("."))

        const res = [];

        const backTracking = (r) => {
            if(r >= n) {
                res.push(board.map(row => row.join('')))
                return;
            }

            for(let c = 0; c < n; c++) {
                if(cols.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) continue;

                cols.add(c);
                posDiag.add(r + c)
                negDiag.add(r - c);
                board[r][c] = 'Q'
                backTracking(r + 1, c)
                cols.delete(c);
                posDiag.delete(r + c)
                negDiag.delete(r - c);
                board[r][c] = '.'
            }
        }
        backTracking(0)
        return res;
    }
}
