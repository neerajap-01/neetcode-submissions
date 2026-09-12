class Solution {
    /**
     * @param {character[][]} board
     * @return {void} Do not return anything, modify board in-place instead.
     */
    solve(board) {
        const rows = board.length;
        const cols = board[0].length;

        const safeCord = new Set();

        const dfs = (r,c) => {
            const key = `${r}-${c}`
            if(r < 0 || c < 0 || r >= rows || c >= cols || board[r][c] !== "O" || safeCord.has(key)) return;

            safeCord.add(key);
            board[r][c] = '#';
            
            dfs(r + 1, c)
            dfs(r - 1, c)
            dfs(r, c + 1)
            dfs(r, c - 1)

            board[r][c] = "O"
        }

        for(let c = 0; c < cols; c++) {
            // Top Row
            if(board[0][c] === "O") {
                dfs(0, c)
            }
            //Bottom Row
            if(board[rows - 1][c] === "O") {
                dfs(rows - 1, c)
            }
        }

        for(let r = 0; r < rows; r++) {
            //Left col
            if(board[r][0] === "O") {
                dfs(r, 0)
            }
            //Right col
            if(board[r][cols - 1] === "O") {
                dfs(r, cols - 1)
            }
        }

        for(let r = 0; r < rows; r++) {
            for(let c = 0; c < cols; c++) {
                const key = `${r}-${c}`;
                if(!safeCord.has(key) && board[r][c] !== "X") {
                    board[r][c] = "X"
                } 
            }
        }
    }
}
