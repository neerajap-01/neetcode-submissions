class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const col = new Set();
        const posDiag = new Set(); // (r + c)
        const negDiag = new Set(); // (r = c)

        const res = [];
        const board = Array.from({ length: n }, () => Array(n).fill('.'));

        const backTracking = (r) => {
            if(r >= n) {
                res.push(board.map((row) => row.join('')))
                return;
            }
            
            for(let c = 0; c < n; c++) {
                if(col.has(c) || posDiag.has(r + c) || negDiag.has(r - c)) continue;

                board[r][c] = 'Q'
                col.add(c);
                posDiag.add(r + c);
                negDiag.add(r - c);

                backTracking(r + 1)

                board[r][c] = '.'
                col.delete(c);
                posDiag.delete(r + c);
                negDiag.delete(r - c);
            }
        }

        backTracking(0);
        return res;
    }
}
