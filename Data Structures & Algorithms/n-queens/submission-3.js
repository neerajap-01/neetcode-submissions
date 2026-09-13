class Solution {
    /**
     * @param {number} n
     * @return {string[][]}
     */
    solveNQueens(n) {
        const col = new Set();
        const posDiag = new Set(); // r + c
        const negDiag = new Set(); // r - c
        const board = Array.from({ length: n }, () => Array(n).fill('.'));

        const res = [];
        const dfs = (r) => {
            if(r >= board.length) {
                res.push(board.map((row) => row.join('')))
                return
            }

            for(let c = 0; c < board[0].length; c++) {
                if(col.has(c) || posDiag.has(r + c) || negDiag.has(r - c) || board[r][c] === 'Q') continue;

                board[r][c] = 'Q'
                col.add(c);
                posDiag.add(r + c);
                negDiag.add(r - c);
                dfs(r + 1);
                board[r][c] = '.'
                col.delete(c);
                posDiag.delete(r + c);
                negDiag.delete(r - c);
            }
        }

        dfs(0);
        return res;
    }
}
